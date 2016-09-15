/**
 * Created by duber on 12/09/16.
 */

import {Token} from "./Token";

class Lexer {

    private expresion: string;
    private posicion: number;
    private longitud: number;
    private nuevoToken: number;

    constructor(expresion: string) {
        this.establecer(expresion);
    }

    public establecer(expresion: string): void {
        this.expresion = "" + expresion;
        this.posicion = 0;
        this.longitud = 0;
        this.nuevoToken = 0;
    }

    private getToken(): number {
        let n: number = this.expresion.length;
        this.posicion += this.longitud;

        this.longitud = 1;

        while (this.posicion < n && this.expresion.charAt(this.posicion) == ' ') {
            this.posicion++;
        }

        if (this.posicion < n) {
            let caracter: string = this.expresion.charAt(this.posicion);

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
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token.MENOR_IGUAL_QUE;
                    }
                    return Token.MENOR_QUE;
                case '>':
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token.MAYOR_IGUAL_QUE;
                    }
                    return Token.MAYOR_QUE;
                case '=':
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token.IGUAL_QUE;
                    }
                    return Token.ASIGNACION;
                case '!':
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token.DIFERENTE;
                    }
                    return Token.NO_LOGICO;

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
                    while (this.posicion + this.longitud < n && this.expresion.charAt(this.posicion
                                + this.longitud)!='"') {
                            this.longitud++;
                    }
                    if(this.posicion + this.longitud == n && this.expresion.charAt(this.posicion
                                + this.longitud)!='"'){
                        return Token.ERROR;
                    }
                    this.longitud=this.longitud+1;
                    return Token.CADENA;
                case 'f':
                this.longitud++;
                    if (this.expresion.charAt(this.posicion + this.longitud) == 'o') {
                        this.longitud++;
                        if (this.expresion.charAt(this.posicion + this.longitud) == 'r') {
                            this.longitud++;
                            if (this.expresion.charAt(this.posicion + this.longitud) == ' ') {
                                return Token.FOR;
                            }
                        }
                    }

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
                    //palabras reservadas
                    
                    if(this.expresion.substring(this.posicion, this.posicion + 5)=="const" && (this.expresion.charAt(this.posicion + 5) =="" || this.expresion.charAt(this.posicion + 5)==" ")){
                        this.longitud=5;
                        return Token.CONST;
                    }
                    if(this.expresion.substring(this.posicion, this.posicion + 5)=="while" && (this.expresion.charAt(this.posicion + 5) =="" || this.expresion.charAt(this.posicion + 5)==" ")){
                        this.longitud=5;
                        return Token.WHILE;
                    }
                    if(this.expresion.substring(this.posicion, this.posicion + 3)=="let" && (this.expresion.charAt(this.posicion + 3) =="" || this.expresion.charAt(this.posicion + 3)==" ")){
                        this.longitud=3;
                        return Token.LET;
                    }
                    if(this.expresion.substring(this.posicion, this.posicion + 5)=="class" && (this.expresion.charAt(this.posicion + 5) =="" || this.expresion.charAt(this.posicion + 5)==" ")){
                        this.longitud=5;
                        return Token.CLASS;
                    }
                    if(this.expresion.substring(this.posicion, this.posicion + 3)=="var" && (this.expresion.charAt(this.posicion + 3) =="" || this.expresion.charAt(this.posicion + 3)==" ")){
                        this.longitud=3;
                        return Token.VAR;
                    }
                    if(this.expresion.substring(this.posicion, this.posicion + 2)=="if" && (this.expresion.charAt(this.posicion + 2) =="" || this.expresion.charAt(this.posicion + 2)==" ")){
                        this.longitud=2;
                        return Token.IF;
                    }

                    //identificadores
                    // if(caracter=='_' || this.isAlfabeto(caracter)){
                    //     while(this.posicion + this.longitud < n
                    //         && this.expresion.charAt(this.posicion
                    //             + this.longitud)=="_"){
                    //         this.longitud++;
                    //     }
                    //     if(!this.isAlfabeto(this.expresion.charAt(this.posicion
                    //             + this.longitud+1))){
                    //         return Token.ERROR;
                    //     }
                    //     else{
                    //         console.log(this.expresion.charAt(this.posicion+ this.longitud));
                    //         while(this.posicion + this.longitud < n && (this.expresion.charAt(this.posicion
                    //             + this.longitud+1)!=" " || this.expresion.charAt(this.posicion
                    //             + this.longitud+1)!="")){
                    //             console.log(this.expresion.charAt(this.posicion+ this.longitud));
                    //            this.longitud++; 
                    //         }
                    //         return Token.IDENTIFICADOR;
                    //     }
                    // }
            }
        }

        return Token.FIN_ARCHIVO;
    }

    public advance(): void {
        this.nuevoToken = this.getToken();
    }
    public match(token: number): boolean {
        if (this.nuevoToken == 0) {
            this.nuevoToken = this.getToken();
        }

        return token == this.nuevoToken;
    }

    public obtenerEntero(): number {

        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    }

    public obtenerReal(): number {
        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    }

    public obtenerSymbolo(): string {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    }
    public obtenerCadena(): string {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    }
    public obtenerError(): string {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    }
    public obtenerPalabraReservada(): string {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    }
    private isAlfabeto(char: string): boolean{
        return (65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90) || (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122);
    }
    private isDigit(char: string): boolean {
        return 48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57;
    }

}

export {Lexer}