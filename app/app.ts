/**
 * Created by duber on 12/09/16.
 */
import {Lexer} from './interprete/Lexer'
import {Token} from './interprete/Token'
import {VM} from './interprete/VM'
/* class app */
class App {

    private static init(): void {

        let programa = (<HTMLInputElement>document.getElementById('code')).value;

        if (programa !== '') {
        
           let calculadora:VM = new VM(programa);

            calculadora.run();
            (<HTMLInputElement>document.getElementById('result')).value = "\n" + calculadora.getAnswer();
        } else {
            (<HTMLInputElement>document.getElementById('result')).value = "Digite su código";
        }
    }

    public static main(): void {
        document.getElementById('generate').addEventListener('click', this.init)
    }

}

App.main()