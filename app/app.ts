/**
 * Created by duber on 12/09/16.
 */
import {Lexer} from './interprete/Lexer'
import {Token} from './interprete/Token'

class App{
    public static main():void {
        let programa: string = "2+ 233 +  4.5";
        let lexer:Lexer = new Lexer(programa);
        while(!lexer.match(Token.FIN_ARCHIVO) ){
            if( lexer.match(Token.VALOR_ENTERO) ){
                document.write("Entero " + lexer.obtenerEntero()+"<br>");
            }
            if( lexer.match(Token.SUMA) ){
                document.write("SUMA "+"<br>");
            }

            if( lexer.match(Token.VALOR_REAL) ){
                document.write("Real "+ lexer.obtenerReal()+"<br>");
            }
            lexer.advance();
        }
    }
}

App.main()