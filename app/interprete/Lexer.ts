/**
 * Created by duber on 12/09/16.
 */

import {Token} from "./Token";

class Lexer {

    private expresion:string;
    private posicion:number;
    private longitud:number;
    private nuevoToken:number;

    constructor(expresion:string) {
        this.establecer(expresion);
    }

    public establecer(expresion:string):void {
        this.expresion = "" + expresion;
        this.posicion = 0;
        this.longitud = 0;
        this.nuevoToken = 0;
    }

    private getToken():number {
        let n:number = this.expresion.length;
        this.posicion += this.longitud;

        this.longitud = 1;

        while (this.posicion < n && this.expresion.charAt(this.posicion) == ' ') {
            this.posicion++;
        }

        if (this.posicion < n) {
            let caracter:string = this.expresion.charAt(this.posicion);

            switch (caracter) {
                //Operadores Aritmeticos
                case '+':
                    return Token.SUMA;
                case '-':
                    return Token.RESTA;
                case '*':
                    return Token.MULTIPLICACION;
                case '/':
                    return Token.DIVISION;
                case "¿":
                    return Token.DIVISION_ENTERA
                case '^':
                    return Token.POTENCIA;
                case '%':
                    return Token.MODULO;

                //Operadores relacionales
                case '<':
                    return Token.MENOR_QUE;
                case '>':
                    return Token.MAYOR_QUE;
                case '=':
                   return Token.IGUAL_QUE;
                case '!':
                    return Token.DIFERENTE;

                //Operadores logicos 
                case '&':
                    return Token.Y_LOGICO;
                case '|':
                    return Token.O_LOGICO;

                //Parentesis
                case '(':
                    return Token.ABRIR_PARENTESIS;
                case ')':
                    return Token.CERRAR_PARENTESIS;
                //Corchetes
                case '[':
                    return Token.ABRIR_CORCHETES;
                case ']':
                    return Token.CERRAR_CORCHETES;
                //Coma
                case ',':
                    return Token.COMA;
                //Punto y coma
                case ';':
                    return Token.PUNTO_COMA;  
                //Comilla
                case '"':
                    return Token.COMILLA;
                default:
                    if (this.isDigit(caracter)) {
                        while (this.posicion + this.longitud < n
                        && this.isDigit(this.expresion.charAt(this.posicion
                            + this.longitud))) {
                            this.longitud++;
                        }

                        if (this.posicion + this.longitud < n
                            && this.expresion.charAt(this.posicion + this.longitud) == '.') {
                            this.longitud++;

                            while (this.posicion + this.longitud < n
                            && this.isDigit(this.expresion.charAt(this.posicion
                                + this.longitud))) {
                                this.longitud++;
                            }
                            return Token.VALOR_REAL;
                        }
                        return Token.VALOR_ENTERO;
                    }
            }
        }

        return Token.FIN_ARCHIVO;
    }

    public advance():void {
        this.nuevoToken = this.getToken();
    }
    public match(token:number):boolean {
        if (this.nuevoToken == 0) {
            this.nuevoToken = this.getToken();
        }

        return token == this.nuevoToken;
    }

    public obtenerEntero():number {

        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    }
    
    public obtenerReal():number {
        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    }

    private isDigit(char:string):boolean {
        return 48<=char.charCodeAt(0) && char.charCodeAt(0)<=57;
    }

}

export {Lexer}