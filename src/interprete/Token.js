"use strict";
/**
 * Created by duber on 12/09/16.
 */
var Token = (function () {
    function Token() {
    }
    Token.FIN_ARCHIVO = -1;
    //
    Token.ERROR = -2;
    //
    Token.SUMA = 1;
    Token.RESTA = 2;
    Token.MULTIPLICACION = 3;
    Token.DIVISION = 4;
    Token.POTENCIA = 5;
    Token.MODULO = 6;
    Token.DIVISION_ENTERA = 7;
    Token.ABRIR_PARENTESIS = 8;
    Token.CERRAR_PARENTESIS = 9;
    Token.PI = 10;
    //
    Token.MENOR_QUE = 11;
    Token.MAYOR_QUE = 12;
    Token.IGUAL_QUE = 13;
    Token.MENOR_IGUAL_QUE = 14;
    Token.MAYOR_IGUAL_QUE = 15;
    Token.DIFERENTE = 16;
    //
    Token.Y_LOGICO = 17;
    Token.O_LOGICO = 18;
    Token.NO_LOGICO = 19;
    Token.ABRIR_CORCHETES = 20;
    Token.CERRAR_CORCHETES = 21;
    Token.COMA = 22;
    Token.PUNTO_COMA = 23;
    Token.CADENA = 24;
    Token.ASIGNACION = 25;
    Token.IDENTIFICADOR = 26;
    //Palabras reservadas
    Token.VAR = 27;
    Token.IF = 28;
    Token.WHILE = 29;
    Token.FOR = 30;
    Token.CONST = 31;
    Token.LET = 32;
    Token.CLASS = 33;
    //
    Token.VALOR_ENTERO = 100;
    Token.VALOR_REAL = 101;
    return Token;
}());
exports.Token = Token;
