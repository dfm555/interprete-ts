/**
 * Created by duber on 12/09/16.
 */
import {Lexer} from './interprete/Lexer'
import {Token} from './interprete/Token'
/* class app */
class App {

    private static init(): void {

        var programa = (<HTMLInputElement>document.getElementById('code')).value;

        if (programa !== '') {
            let lexer: Lexer = new Lexer(programa);
            (<HTMLInputElement>document.getElementById('result')).value = "";
            while (!lexer.match(Token.FIN_ARCHIVO)) {
                if (lexer.match(Token.VALOR_ENTERO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Entero " + lexer.obtenerEntero() + "\n";
                }
                if (lexer.match(Token.SUMA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Suma " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.RESTA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Resta " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MULTIPLICACION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Multiplicacion " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.VALOR_REAL)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Real " + lexer.obtenerReal() + "\n";
                }
                if (lexer.match(Token.ABRIR_PARENTESIS)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.DIVISION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Division " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.CERRAR_PARENTESIS)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.DIVISION_ENTERA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Division Entera " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MODULO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Modulo " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.POTENCIA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Potencia " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MENOR_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Menor que " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MAYOR_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Mayor que " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Igual que " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MENOR_IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Menor igual que " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.MAYOR_IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Mayor igual que " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.DIFERENTE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Diferente " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.Y_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Y logico " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.O_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "O logico " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.NO_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "No logico " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.ASIGNACION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Asignación " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.CADENA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Cadena " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.ERROR)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Error " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.VAR)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.IF)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.WHILE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.FOR)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.CONST)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.LET)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.CLASS)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Palabra reservada " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.ABRIR_CORCHETES)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Corchete " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.CERRAR_CORCHETES)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Corchete " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.IDENTIFICADOR)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "variable " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.PUNTO_COMA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "punto y coma " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.COMA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Coma " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.FALSE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "False " + lexer.obtenerValor() + "\n";
                }
                if (lexer.match(Token.TRUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "True " + lexer.obtenerValor() + "\n";
                }
                lexer.advance();
            }
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = "Digite su código";
        }
    }

    public static main(): void {
        document.getElementById('generate').addEventListener('click', this.init)
    }

}

App.main()