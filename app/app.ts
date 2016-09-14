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
                    (<HTMLInputElement>document.getElementById('result')).value += "Suma " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.RESTA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Resta " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MULTIPLICACION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Multiplicacion " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.VALOR_REAL)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Real " + lexer.obtenerReal() + "\n";
                }
                if (lexer.match(Token.ABRIR_PARENTESIS)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.DIVISION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Division " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.CERRAR_PARENTESIS)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.DIVISION_ENTERA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Division Entera " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MODULO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Modulo " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.POTENCIA)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Potencia " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MENOR_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Menor que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MAYOR_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Mayor que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MENOR_IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Menor igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.MAYOR_IGUAL_QUE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Mayor igual que " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.DIFERENTE)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Diferente " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.Y_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Y logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.O_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "O logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.NO_LOGICO)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "No logico " + lexer.obtenerSymbolo() + "\n";
                }
                if (lexer.match(Token.ASIGNACION)) {
                    (<HTMLInputElement>document.getElementById('result')).value += "Asignación " + lexer.obtenerSymbolo() + "\n";
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