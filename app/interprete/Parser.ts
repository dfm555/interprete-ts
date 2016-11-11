/**
 * Created by duber on 10/11/16.
 */

import {Lexer} from './Lexer';
import {Token} from './Token';
import {Instruccion} from './Instruccion';

class Parser {


    private readonly lexer:Lexer;
    private readonly listaInstrucciones:Array<number>;

    constructor(lexer:Lexer) {
        this.lexer = lexer;
        this.listaInstrucciones = new Array;
    }

    declaraciones():void {
        while (!this.lexer.match(Token.FIN_ARCHIVO)) {
            this.expresiones();
            this.lexer.advance();
        }

        this.listaInstrucciones.push(Instruccion.FIN);
        //System.out.println("Fin!");
    }

    expresiones():void {
        this.expresion();
        if (this.lexer.match(Token.COMA)) {
            this.listaInstrucciones.push(Instruccion.PRINT);
            this.lexer.advance();
            this.expresiones();
        } else if (this.lexer.match(Token.PUNTO_COMA)) {
            this.listaInstrucciones.push(Instruccion.POP);
            this.lexer.advance();
            this.expresiones();
        } else {
            this.listaInstrucciones.push(Instruccion.PRINT);
        }
    }

    termino():void {
        if (this.lexer.match(Token.VALOR_ENTERO)) {
            let entero:number = this.lexer.obtenerEntero();

            this.listaInstrucciones.push(Instruccion.PUSH_NUMERO_ENTERO);
            this.listaInstrucciones.push(entero);

            this.lexer.advance();
        } else if (this.lexer.match(Token.VALOR_REAL)) {
            let real:number = this.lexer.obtenerReal();
            //System.out.println("real: " + real);

            this.listaInstrucciones.push(Instruccion.PUSH_NUMERO_REAL);
            this.listaInstrucciones.push(real);

            this.lexer.advance();
        } else if (this.lexer.match(Token.ABRIR_PARENTESIS)) {
            console.log('(');

            this.lexer.advance();
            this.expresion();
            if (!this.lexer.match(Token.CERRAR_PARENTESIS)) {
                console.log("Error: Se esperaba )");
                return;
            }
            console.log(")");

            this.lexer.advance();
        }
    }

    expresion():void {
        this.termino();
        this.expresionPrima();
    }

    expresionPrima():void {
        if (this.lexer.match(Token.SUMA)) {
            this.lexer.advance();
            this.termino();
            this.listaInstrucciones.push(Instruccion.SUMA);
            this.expresionPrima();
        }

        if (this.lexer.match(Token.RESTA)) {
            this.lexer.advance();
            this.termino();
            this.listaInstrucciones.push(Instruccion.RESTA);
            this.expresionPrima();
        }
    }

    obtenerInstrucciones():Array<number> {
        return this.listaInstrucciones;
    }
}

export {Parser};