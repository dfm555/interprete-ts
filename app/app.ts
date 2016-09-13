/**
 * Created by duber on 12/09/16.
 */
import {Lexer} from './interprete/Lexer'
import {Token} from './interprete/Token'
/* class app */
class App{

    private static init():void{

        var programa = (<HTMLInputElement>document.getElementById('code')).value;

        if( programa !== '' ){
            let lexer:Lexer = new Lexer(programa);
            while(!lexer.match(Token.FIN_ARCHIVO) ){
                if( lexer.match(Token.VALOR_ENTERO) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Entero " + lexer.obtenerEntero()+"\n";
                }
                if( lexer.match(Token.SUMA)){
                    (<HTMLInputElement>document.getElementById('result')).value += "Suma "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.RESTA)){
                    (<HTMLInputElement>document.getElementById('result')).value += "Resta "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.MULTIPLICACION)){
                    (<HTMLInputElement>document.getElementById('result')).value += "Multiplicacion "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.VALOR_REAL) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Real "+lexer.obtenerReal()+"\n";
                }
                if( lexer.match(Token.ABRIR_PARENTESIS) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.DIVISION) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Division "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.CERRAR_PARENTESIS) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Parentesis "+lexer.obtenerSymbolo()+"\n";
                }
                if( lexer.match(Token.DIVISION_ENTERA) ){
                    (<HTMLInputElement>document.getElementById('result')).value += "Real "+lexer.obtenerSymbolo()+"\n";
                }
                lexer.advance();
            }
        }else{
            console.log('vacio')
        }


    }

    public static main():void {
        document.getElementById('generate').addEventListener('click', this.init)
    }

}

App.main()