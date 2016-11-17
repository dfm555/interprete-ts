/**
 * Created by duber on 10/11/16.
 */

import {Lexer} from './Lexer';
import {Parser} from './Parser';
import {Instruccion} from './Instruccion';
import {Variable} from './Variable';


class VM{
    private listaInstrucciones:Array<Object>;
    private pilaNumeros:Array<Object>;
    private cadenaResultado:string;
    private tablaDeSimbolos:Array<Variable>;

    constructor(programa:string) {
        let parser: Parser = new Parser(new Lexer(programa));
        parser.declaraciones();
        this.cadenaResultado = "";

        this.listaInstrucciones = parser.obtenerInstrucciones();
        this.tablaDeSimbolos = parser.obtenerTablaDeSimbolos();
        this.pilaNumeros = new Array;
    }

    run():void{
        let n:number = this.listaInstrucciones.length;
        let i:number = 0;

        while (i < n) {
            let operacion:number = Number(this.listaInstrucciones[i]);

            switch (operacion) {
                case Instruccion.FIN:
                    return;
                case Instruccion.PRINT:

                    if (this.pilaNumeros.length > 0) {

                        let ans:number = Number(this.pilaNumeros.pop());
                        if (Math.floor(ans) == ans) {
                            this.cadenaResultado += "ans = " + Math.floor(ans) + "\n";
                        } else {
                            this.cadenaResultado += "ans = " + ans + "\n";
                        }
                    }
                    break;
                case Instruccion.POP:
                    if (this.pilaNumeros.length > 0) {
                        this.pilaNumeros.pop();
                    }
                    break;
                case Instruccion.SUMA:
                    if (this.pilaNumeros.length > 1) {
                        let numero2:number = Number(this.pilaNumeros.pop());
                        let numero1:number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
                            this.pilaNumeros.push(Math.floor(numero1)
                                + Math.floor(numero2));
                        } else {
                            this.pilaNumeros.push(numero1+numero2);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.RESTA:
                    if (this.pilaNumeros.length > 1) {
                        let numero2:number = Number(this.pilaNumeros.pop());
                        let numero1:number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
                            this.pilaNumeros.push(Math.floor(numero1)
                                - Math.floor(numero2));
                        } else {
                            this.pilaNumeros.push(numero1-numero2);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.MULTIPLICACION:
                    if (this.pilaNumeros.length > 1) {
                        let numero2:number = Number(this.pilaNumeros.pop());
                        let numero1:number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
                            this.pilaNumeros.push(Math.floor(numero1)
                                * Math.floor(numero2));
                        } else {
                            this.pilaNumeros.push(numero1*numero2);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.DIVISION:
                    if (this.pilaNumeros.length > 1) {
                        let numero2:number = Number(this.pilaNumeros.pop());
                        let numero1:number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {

                            if(numero2 != 0){
                                this.pilaNumeros.push(Math.floor(numero1)
                                  / Math.floor(numero2));
                            }else{
                                throw new Error("Error: Division por cero");
                            }
                        } else {
                            if(numero2 != 0){
                                this.pilaNumeros.push(numero1 / numero2);
                            }else{
                                throw new Error("Error: Division por cero");
                            }
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.PUSH_NUMERO_ENTERO:
                    ++i;
                    this.pilaNumeros.push(this.listaInstrucciones[i]);
                    break;
                case Instruccion.PUSH_NUMERO_REAL:
                    ++i;
                    this.pilaNumeros.push(this.listaInstrucciones[i]);
                    break;
                case Instruccion.PUSH_IDENTIFICADOR:
                    ++i;
                    let variable:string = this.listaInstrucciones[i].toString();
                    let varIndex:number = this.arrayObjectIndexOf(this.tablaDeSimbolos, variable, "nombre");
                    this.pilaNumeros.push(this.tablaDeSimbolos[varIndex].valor);
                    break;
                case Instruccion.ASIGNACION:
                    ++i;
                    let index:number = Number (this.listaInstrucciones[i]);
                    if (this.pilaNumeros.length > 0) {
                        let numero1:number = Number(this.pilaNumeros.pop());
                        this.pilaNumeros.push(numero1);
                        if (numero1 % 1 === 0) {
                            this.tablaDeSimbolos[index].tipo = "entero";
                            this.tablaDeSimbolos[index].valor = " "+numero1;
                        } else {
                           this.tablaDeSimbolos[index].tipo = "real";
                           this.tablaDeSimbolos[index].valor = " "+numero1;
                        }

                        console.log("\n"+ this.tablaDeSimbolos[index].toString());
                        this.cadenaResultado += this.tablaDeSimbolos[index].toString()+"\n";
                    }
                    break;
                default:
                    return;
            }

            ++i;
        }
    }

    getAnswer():string {
        return this.cadenaResultado;
    }

    arrayObjectIndexOf(myArray, searchTerm, property):number {
        for(let i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property] === searchTerm) return i;
        }
        return -1;
    }
}

export {VM};
