/**
 * Created by duber on 10/11/16.
 */

import {Lexer} from './Lexer';
import {Parser} from './Parser';
import {Instruccion} from './Instruccion';


class VM{
    private readonly listaInstrucciones:Array<number>;
    private readonly pilaNumeros:Array<number>;
    private cadenaResultado:string;

    constructor(programa:string) {
        let parser: Parser = new Parser(new Lexer(programa));
        parser.declaraciones();
        this.cadenaResultado = "";

        this.listaInstrucciones = parser.obtenerInstrucciones();
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
                    console.log("print");
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
                    console.log("pop");
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
                        // System.out.println("SUMA");
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
                        // System.out.println("SUMA");
                    } else {
                        throw new Error("Error: Falta operando.");
                    }
                    break;
                case Instruccion.PUSH_NUMERO_ENTERO:
                    ++i;
                    //System.out.println("ENTERO: " + listaInstrucciones.get(i));
                    this.pilaNumeros.push(this.listaInstrucciones[i]);
                    break;
                case Instruccion.PUSH_NUMERO_REAL:
                    ++i;
                    this.pilaNumeros.push(Math.round(this.listaInstrucciones[i]));
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
