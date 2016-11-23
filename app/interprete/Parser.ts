/**
 * Created by duber on 10/11/16.
 */

import { Lexer } from './Lexer';
import { Token } from './Token';
import { Instruccion } from './Instruccion';
import { Variable } from './Variable';

class Parser {


  private lexer: Lexer;
  private listaInstrucciones: Array<Object>;
  private tablaDeSimbolos: Array<Variable>;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.listaInstrucciones = new Array;
    this.tablaDeSimbolos = new Array;
  }

  declaraciones(): void {
    while (!this.lexer.match(Token.FIN_ARCHIVO)) {
      this.asignaciones();
      this.expresiones();
    }

    this.listaInstrucciones.push(Instruccion.FIN);

  }

  expresiones(): void {
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


  termino(): void {
    this.factor();
    this.factorPrimo();
  }

  expresion(): void {
    this.termino();
    this.terminoPrimo();
    this.terminoRelacional();
    this.terminoComparacion();
    this.terminoLogico();
  }

  factor(): void {

    if(this.lexer.match(Token.NO_LOGICO)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.NO_LOGICO);
      this.terminoRelacional();
    }

    if (this.lexer.match(Token.VALOR_ENTERO)) {

      let entero: number = this.lexer.obtenerEntero();
      this.listaInstrucciones.push(Instruccion.PUSH_NUMERO_ENTERO);
      this.listaInstrucciones.push(entero);
      this.lexer.advance();

    } else if (this.lexer.match(Token.VALOR_REAL)) {

      let real: number = this.lexer.obtenerReal();
      this.listaInstrucciones.push(Instruccion.PUSH_NUMERO_REAL);
      this.listaInstrucciones.push(real);
      this.lexer.advance();

    } else if (this.lexer.match(Token.ABRIR_PARENTESIS)) {
      this.lexer.advance();
      this.expresion();
      if (!this.lexer.match(Token.CERRAR_PARENTESIS)) {
        console.log("Error: Se esperaba )");
        return;
      }
      this.lexer.advance();
    } else if (this.lexer.match(Token.IDENTIFICADOR)) {
      let cadena: string = this.lexer.obtenerValor();
      this.listaInstrucciones.push(Instruccion.PUSH_IDENTIFICADOR);
      this.listaInstrucciones.push(cadena);
      this.lexer.advance();
    } else if (this.lexer.match(Token.FALSE)) {

      if(this.lexer.nextTokenIs(Token.ASIGNACION)){
         alert("Error: false es una palabra reservada");
         throw new Error("Error: Es una palabra reservada");
      }
      this.listaInstrucciones.push(Instruccion.PUSH_VALOR_LOGICO);
      this.listaInstrucciones.push(false);
      this.lexer.advance();

    } else if (this.lexer.match(Token.TRUE)) {
      if(this.lexer.nextTokenIs(Token.ASIGNACION)){
        alert("Error: true es una palabra reservada");
         throw new Error("Error: Es una palabra reservada");
      }
      this.listaInstrucciones.push(Instruccion.PUSH_VALOR_LOGICO);
      this.listaInstrucciones.push(true);
      this.lexer.advance();
    } else if (this.lexer.match(Token.CADENA)) {
      let cadena: string = this.lexer.obtenerValor();
      this.listaInstrucciones.push(Instruccion.PUSH_CADENA);
      this.listaInstrucciones.push(cadena.split('"').join(""));
      this.lexer.advance();
    }
  }

  terminoPrimo(): void {
    if (this.lexer.match(Token.SUMA)) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push(Instruccion.SUMA);
      this.terminoPrimo();
    }

    if (this.lexer.match(Token.RESTA)) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push(Instruccion.RESTA);
      this.terminoPrimo();
    }
  }

  factorPrimo(): void {
    if (this.lexer.match(Token.MULTIPLICACION)) {
      this.lexer.advance();
      this.factor();
      this.listaInstrucciones.push(Instruccion.MULTIPLICACION);
      this.factorPrimo();
    }

    if (this.lexer.match(Token.DIVISION)) {
      this.lexer.advance();
      this.factor();
      this.listaInstrucciones.push(Instruccion.DIVISION);
      this.factorPrimo();
    }
  }


  terminoRelacional():void{

    if(this.lexer.match(Token.MENOR_QUE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.MENOR_QUE);
      this.terminoRelacional();
    }

    if(this.lexer.match(Token.MENOR_IGUAL_QUE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.MENOR_IGUAL_QUE);
      this.terminoRelacional();
    }

    if(this.lexer.match(Token.MAYOR_QUE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.MAYOR_QUE);
      this.terminoRelacional();
    }

    if(this.lexer.match(Token.MAYOR_IGUAL_QUE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.MAYOR_IGUAL_QUE);
      this.terminoRelacional();
    }
  }

  terminoComparacion():void{
    if(this.lexer.match(Token.DIFERENTE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.DIFERENTE);
      this.terminoComparacion();
    }

    if(this.lexer.match(Token.IGUAL_QUE)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.IGUAL);
      this.terminoComparacion();
    }
  }

  terminoLogico():void{
    if(this.lexer.match(Token.Y_LOGICO)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.Y_LOGICO);
      this.terminoLogico();
    }

    if(this.lexer.match(Token.O_LOGICO)){
      this.lexer.advance();
      this.expresion();
      this.listaInstrucciones.push(Instruccion.O_LOGICO);
      this.terminoLogico();
    }
  }

  asignaciones(): void {
    if (this.lexer.match(Token.IDENTIFICADOR) && this.lexer.nextTokenIs(Token.ASIGNACION)) {
      this.asignacion();
      if (!this.lexer.match(Token.PUNTO_COMA)) {
        console.log("Error: Se esperaba ; en la instrucción de asignación");
        return;
      }
      this.lexer.advance();
      this.asignaciones();
    }
  }

  asignacion(): void {

    let cadena: string = this.lexer.obtenerValor();

    let id: Variable = new Variable(cadena);
    if (!(id.contains(this.tablaDeSimbolos))) {
      this.tablaDeSimbolos.push(id);
    }

    this.lexer.advance();
    this.lexer.advance();

    this.asignaciones();

    this.expresion();

    this.listaInstrucciones.push(Instruccion.ASIGNACION);
    this.listaInstrucciones.push(this.tablaDeSimbolos.indexOf(id));

  }

  obtenerInstrucciones(): Array<Object> {
    return this.listaInstrucciones;
  }

  obtenerTablaDeSimbolos(): Array<Variable> {
    return this.tablaDeSimbolos;
  }
}

export { Parser };