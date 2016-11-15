/**
 * Created by duber on 10/11/16.
 */

import {Lexer} from './Lexer';
import {Parser} from './Parser';
import {Instruccion} from './Instruccion';
import {Variable} from './Variable';


class VM{
    private listaInstrucciones:Array<number>;
    private pilaNumeros:Array<number>;
    private cadenaResultado:string;
    private tablaDeSimpbolos:Array<Variable>;

    constructor(programa:string) {
        let parser: Parser = new Parser(new Lexer(programa));
        parser.declaraciones();
        this.cadenaResultado = "";

        this.listaInstrucciones = parser.obtenerInstrucciones();
        this.tablaDeSimpbolos = parser.obtenerTablaDeSimbolos();
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
                        let ans:number = this.pilaNumeros.pop();
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
                        let numero2:number = this.pilaNumeros.pop();
                        let numero1:number = this.pilaNumeros.pop();
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
                        let numero2:number = this.pilaNumeros.pop();
                        let numero1:number = this.pilaNumeros.pop();

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
                        let numero2:number = this.pilaNumeros.pop();
                        let numero1:number = this.pilaNumeros.pop();

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
                        let numero2:number = this.pilaNumeros.pop();
                        let numero1:number = this.pilaNumeros.pop();

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
                case Instruccion.ASIGNACION:
                    ++i;
                    let index:number = this.listaInstrucciones[i];
                    if (this.pilaNumeros.length > 0) {
                        let numero1:number = this.pilaNumeros.pop();

                        if (numero1 % 1 === 0) {
                            this.tablaDeSimpbolos[index].tipo = "entero";
                            this.tablaDeSimpbolos[index].valor = " "+numero1;
                        } else {
                           this.tablaDeSimpbolos[index].tipo = "real";
                           this.tablaDeSimpbolos[index].valor = " "+numero1;
                        }

                        console.log("\n"+ this.tablaDeSimpbolos[index].toString());
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
}

export {VM};
