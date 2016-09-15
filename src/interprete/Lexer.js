/**
 * Created by duber on 12/09/16.
 */
"use strict";
var Token_1 = require("./Token");
var Lexer = (function () {
    function Lexer(expresion) {
        this.establecer(expresion);
    }
    Lexer.prototype.establecer = function (expresion) {
        this.expresion = "" + expresion;
        this.posicion = 0;
        this.longitud = 0;
        this.nuevoToken = 0;
    };
    Lexer.prototype.getToken = function () {
        var n = this.expresion.length;
        this.posicion += this.longitud;
        this.longitud = 1;
        while (this.posicion < n && this.expresion.charAt(this.posicion) == ' ') {
            this.posicion++;
        }
        if (this.posicion < n) {
            var caracter = this.expresion.charAt(this.posicion);
            switch (caracter) {
                //Operadores Aritmeticos
                case '+':
                    return Token_1.Token.SUMA;
                case '-':
                    return Token_1.Token.RESTA;
                case '*':
                    return Token_1.Token.MULTIPLICACION;
                case '/':
                    return Token_1.Token.DIVISION;
                case "¿":
                    return Token_1.Token.DIVISION_ENTERA;
                case '^':
                    return Token_1.Token.POTENCIA;
                case '%':
                    return Token_1.Token.MODULO;
                //Operadores relacionales
                case '<':
                    return Token_1.Token.MENOR_QUE;
                case '>':
                    return Token_1.Token.MAYOR_QUE;
                case '=':
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token_1.Token.IGUAL_QUE;
                    }
                    return Token_1.Token.ASIGNACION;
                case '!':
                    if (this.expresion.charAt(this.posicion + 1) == '=') {
                        this.longitud++;
                        return Token_1.Token.DIFERENTE;
                    }
                    return Token_1.Token.NO_LOGICO;
                //Operadores logicos 
                case '&':
                    return Token_1.Token.Y_LOGICO;
                case '|':
                    return Token_1.Token.O_LOGICO;
                //Parentesis
                case '(':
                    return Token_1.Token.ABRIR_PARENTESIS;
                case ')':
                    return Token_1.Token.CERRAR_PARENTESIS;
                //Corchetes
                case '[':
                    return Token_1.Token.ABRIR_CORCHETES;
                case ']':
                    return Token_1.Token.CERRAR_CORCHETES;
                //Coma
                case ',':
                    return Token_1.Token.COMA;
                //Punto y coma
                case ';':
                    return Token_1.Token.PUNTO_COMA;
                //Comilla
                case '"':
                    while (this.posicion + this.longitud < n && this.expresion.charAt(this.posicion
                        + this.longitud) != '"') {
                        this.longitud++;
                    }
                    if (this.posicion + this.longitud == n && this.expresion.charAt(this.posicion
                        + this.longitud) != '"') {
                        return Token_1.Token.ERROR;
                    }
                    this.longitud = this.longitud + 1;
                    return Token_1.Token.CADENA;
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
                            return Token_1.Token.VALOR_REAL;
                        }
                        return Token_1.Token.VALOR_ENTERO;
                    }
                    if (caracter == "f" || caracter == "c" || caracter == "l" || caracter == "w" || caracter == "v" || caracter == "i") {
                        //palabra reservada for
                        // console.log(caracter,this.expresion.charAt(this.posicion+1),this.expresion.charAt(this.posicion+2));
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "n"
                            && this.expresion.charAt(this.posicion + 3) == "n") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                        if (this.expresion.charAt(this.posicion + 1) == "o" && this.expresion.charAt(this.posicion + 2) == "r") {
                            this.longitud = 3;
                            return Token_1.Token.FOR;
                        }
                    }
            }
        }
        return Token_1.Token.FIN_ARCHIVO;
    };
    Lexer.prototype.advance = function () {
        this.nuevoToken = this.getToken();
    };
    Lexer.prototype.match = function (token) {
        if (this.nuevoToken == 0) {
            this.nuevoToken = this.getToken();
        }
        return token == this.nuevoToken;
    };
    Lexer.prototype.obtenerEntero = function () {
        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    };
    Lexer.prototype.obtenerReal = function () {
        return Number(this.expresion.substring(this.posicion, this.posicion
            + this.longitud));
    };
    Lexer.prototype.obtenerSymbolo = function () {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    };
    Lexer.prototype.obtenerCadena = function () {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    };
    Lexer.prototype.obtenerError = function () {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    };
    Lexer.prototype.obtenerPalabraReservada = function () {
        return this.expresion.substring(this.posicion, this.posicion
            + this.longitud);
    };
    Lexer.prototype.isDigit = function (char) {
        return 48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
