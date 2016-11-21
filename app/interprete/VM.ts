/**
 * Created by duber on 10/11/16.
 */

import { Lexer } from './Lexer';
import { Parser } from './Parser';
import { Instruccion } from './Instruccion';
import { Variable } from './Variable';


class VM {
    private listaInstrucciones: Array<Object>;
    private pilaNumeros: Array<Object>;
    private cadenaResultado: string;
    private tablaDeSimbolos: Array<Variable>;

    constructor(programa: string) {
        let parser: Parser = new Parser(new Lexer(programa));
        parser.declaraciones();
        this.cadenaResultado = "";

        this.listaInstrucciones = parser.obtenerInstrucciones();
        this.tablaDeSimbolos = parser.obtenerTablaDeSimbolos();
        this.pilaNumeros = new Array;
    }

    run(): void {
        let n: number = this.listaInstrucciones.length;
        let i: number = 0;

        while (i < n) {
            let operacion: number = Number(this.listaInstrucciones[i]);

            switch (operacion) {
                case Instruccion.FIN:
                    return;
                case Instruccion.PRINT:

                    if (this.pilaNumeros.length > 0) {

                        let ans: number = Number(this.pilaNumeros.pop());
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
                        let numero2: Object = this.pilaNumeros.pop();
                        let numero1: Object = this.pilaNumeros.pop();
                        if (typeof numero1 == "string" || typeof numero2 == "string"){
                            this.pilaNumeros.push( String(numero1) + String(numero2) )
                        }else{
                            if ((Number(numero1) % 1 === 0)
                                && (Number(numero2) % 1 === 0)) {
                                this.pilaNumeros.push(Math.floor(Number(numero1))
                                    + Math.floor(Number(numero2)));
                            } else {
                                this.pilaNumeros.push(Number(numero1) + Number(numero2));
                            }
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.RESTA:
                    if (this.pilaNumeros.length > 1) {
                        let numero2: number = Number(this.pilaNumeros.pop());
                        let numero1: number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
                            this.pilaNumeros.push(Math.floor(numero1)
                                - Math.floor(numero2));
                        } else {
                            this.pilaNumeros.push(numero1 - numero2);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.MULTIPLICACION:
                    if (this.pilaNumeros.length > 1) {
                        let numero2: number = Number(this.pilaNumeros.pop());
                        let numero1: number = Number(this.pilaNumeros.pop());
                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
                            this.pilaNumeros.push(Math.floor(numero1)
                                * Math.floor(numero2));
                        } else {
                            this.pilaNumeros.push(numero1 * numero2);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.DIVISION:
                    if (this.pilaNumeros.length > 1) {
                        let numero2: number = Number(this.pilaNumeros.pop());
                        let numero1: number = Number(this.pilaNumeros.pop());

                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {

                            if (numero2 != 0) {
                                this.pilaNumeros.push(Math.floor(numero1)
                                    / Math.floor(numero2));
                            } else {
                                throw new Error("Error: Division por cero");
                            }
                        } else {
                            if (numero2 != 0) {
                                this.pilaNumeros.push(numero1 / numero2);
                            } else {
                                throw new Error("Error: Division por cero");
                            }
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.MENOR_QUE:
                    debugger
                    if (this.pilaNumeros.length > 1) {
                        let numero2: number = Number(this.pilaNumeros.pop());
                        let numero1: number = Number(this.pilaNumeros.pop());
                        if(numero1 < numero2){
                            this.pilaNumeros.push(true)
                        }else{
                            this.pilaNumeros.push(false);
                        }
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.PUSH_NUMERO_ENTERO:
                    ++i;
                    this.pilaNumeros.push(Number(this.listaInstrucciones[i]));
                    break;
                case Instruccion.PUSH_NUMERO_REAL:
                    ++i;
                    this.pilaNumeros.push(Number(this.listaInstrucciones[i]));
                    break;
                case Instruccion.PUSH_IDENTIFICADOR:
                    ++i;
                    let variable: string = this.listaInstrucciones[i].toString();
                    let varIndex: number = this.arrayObjectIndexOf(this.tablaDeSimbolos, variable, "nombre");
                    let tipo:string = this.tablaDeSimbolos[varIndex].tipo;
                    let valor:any = this.tablaDeSimbolos[varIndex].valor;

                    if(tipo == 'logico'){
                        valor = Boolean(valor);
                    }else if(tipo == 'entero' || tipo == 'real'){
                        valor = Number(valor);
                    }
                    this.pilaNumeros.push(valor);
                    break;
                case Instruccion.PUSH_VALOR_LOGICO:
                    ++i;
                    this.pilaNumeros.push(Boolean(this.listaInstrucciones[i]));
                    break;
                case Instruccion.PUSH_CADENA:
                    ++i;
                    console.log('push cadena',this.listaInstrucciones[i]);
                    this.pilaNumeros.push(String(this.listaInstrucciones[i]));
                    break;
                case Instruccion.ASIGNACION:
                    ++i;
                    let index: number = Number(this.listaInstrucciones[i]);
                    if (this.pilaNumeros.length > 0) {
                        let numero1: Object = this.pilaNumeros.pop();
                        this.pilaNumeros.push(Number(numero1));
                        if (typeof numero1 === "number") {
                            if (Number(numero1) % 1 === 0) {
                                this.tablaDeSimbolos[index].tipo = "entero";
                                this.tablaDeSimbolos[index].valor = String(numero1);
                            } else {
                                this.tablaDeSimbolos[index].tipo = "real";
                                this.tablaDeSimbolos[index].valor = String(numero1);
                            }
                        } else if (typeof numero1 === "string") {
                            this.tablaDeSimbolos[index].tipo = "cadena";
                            this.tablaDeSimbolos[index].valor = ""+numero1;
                        } else if (typeof numero1 === "boolean") {
                            this.tablaDeSimbolos[index].tipo = "logico";
                            this.tablaDeSimbolos[index].valor = String(numero1);
                        }


                    }
                    this.cadenaResultado += this.tablaDeSimbolos[index].toString() + "\n";

                    break;
                default:
                    return;
            }

            ++i;
        }
    }

    getAnswer(): string {
        return this.cadenaResultado;
    }

    arrayObjectIndexOf(myArray, searchTerm, property): number {
        for (let i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property] === searchTerm) return i;
        }
        return -1;
    }
}

export { VM };
