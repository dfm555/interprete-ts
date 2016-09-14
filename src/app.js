"use strict";
/**
 * Created by duber on 12/09/16.
 */
var Lexer_1 = require('./interprete/Lexer');
var Token_1 = require('./interprete/Token');
/* class app */
var App = (function () {
    function App() {
    }
    App.init = function () {
        var programa = document.getElementById('code').value;
        if (programa !== '') {
            var lexer = new Lexer_1.Lexer(programa);
            document.getElementById('result').value = "";
            while (!lexer.match(Token_1.Token.FIN_ARCHIVO)) {
                if (lexer.match(Token_1.Token.VALOR_ENTERO)) {
                    document.getElementById('result').value += "Entero " + lexer.obtenerEntero() + "\n";
                }
                if (lexer.match(Token_1.Token.SUMA)) {
                    document.getElementById('result').value += "Suma " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.RESTA)) {
                    document.getElementById('result').value += "Resta " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MULTIPLICACION)) {
                    document.getElementById('result').value += "Multiplicacion " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.VALOR_REAL)) {
                    document.getElementById('result').value += "Real " + lexer.obtenerReal() + "\n";
                }
                if (lexer.match(Token_1.Token.ABRIR_PARENTESIS)) {
                    document.getElementById('result').value += "Parentesis " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.DIVISION)) {
                    document.getElementById('result').value += "Division " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.CERRAR_PARENTESIS)) {
                    document.getElementById('result').value += "Parentesis " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.DIVISION_ENTERA)) {
                    document.getElementById('result').value += "Division Entera " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MODULO)) {
                    document.getElementById('result').value += "Modulo " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.POTENCIA)) {
                    document.getElementById('result').value += "Potencia " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MENOR_QUE)) {
                    document.getElementById('result').value += "Menor que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MAYOR_QUE)) {
                    document.getElementById('result').value += "Mayor que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.IGUAL_QUE)) {
                    document.getElementById('result').value += "Igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MENOR_IGUAL_QUE)) {
                    document.getElementById('result').value += "Menor igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.MAYOR_IGUAL_QUE)) {
                    document.getElementById('result').value += "Mayor igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.DIFERENTE)) {
                    document.getElementById('result').value += "Diferente " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.Y_LOGICO)) {
                    document.getElementById('result').value += "Y logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.O_LOGICO)) {
                    document.getElementById('result').value += "O logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.NO_LOGICO)) {
                    document.getElementById('result').value += "No logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.ASIGNACION)) {
                    document.getElementById('result').value += "Asignación " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token_1.Token.CADENA)) {
                    document.getElementById('result').value += "Cadena " + lexer.obtenerCadena() + "\n";
                }
                if (lexer.match(Token_1.Token.ERROR)) {
                    document.getElementById('result').value += "Error " + lexer.obtenerError() + "\n";
                }
                if (lexer.match(Token_1.Token.VAR)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.IF)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.WHILE)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.FOR)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.CONST)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.LET)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                if (lexer.match(Token_1.Token.CLASS)) {
                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerPalabraReservada() + "\n";
                }
                lexer.advance();
            }
        }
        else {
            document.getElementById('result').value = "Digite su código";
        }
    };
    App.main = function () {
        document.getElementById('generate').addEventListener('click', this.init);
    };
    return App;
}());
App.main();
