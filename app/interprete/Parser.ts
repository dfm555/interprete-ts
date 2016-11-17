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

  constructor( lexer: Lexer ) {
    this.lexer = lexer;
    this.listaInstrucciones = new Array;
    this.tablaDeSimbolos = new Array;
  }

  declaraciones(): void {
    while ( !this.lexer.match( Token.FIN_ARCHIVO ) ) {
      this.asignaciones();
      this.expresiones();
    }

    this.listaInstrucciones.push( Instruccion.FIN );

  }

  expresiones(): void {
    this.expresion();
    if ( this.lexer.match( Token.COMA ) ) {
      this.listaInstrucciones.push( Instruccion.PRINT );
      this.lexer.advance();
      this.expresiones();
    } else if ( this.lexer.match( Token.PUNTO_COMA ) ) {
      this.listaInstrucciones.push( Instruccion.POP );
      this.lexer.advance();
      this.expresiones();
    } else {
      this.listaInstrucciones.push( Instruccion.PRINT );
    }
  }

  termino(): void {
    if ( this.lexer.match( Token.VALOR_ENTERO ) ) {

      let entero: number = this.lexer.obtenerEntero();
      this.listaInstrucciones.push( Instruccion.PUSH_NUMERO_ENTERO );
      this.listaInstrucciones.push( entero );
      this.lexer.advance();

    } else if ( this.lexer.match( Token.VALOR_REAL ) ) {

      let real: number = this.lexer.obtenerReal();
      this.listaInstrucciones.push( Instruccion.PUSH_NUMERO_REAL );
      this.listaInstrucciones.push( real );
      this.lexer.advance();

    } else if ( this.lexer.match( Token.ABRIR_PARENTESIS ) ) {
      this.lexer.advance();
      this.expresion();
      if ( !this.lexer.match( Token.CERRAR_PARENTESIS ) ) {
        console.log( "Error: Se esperaba )" );
        return;
      }
      this.lexer.advance();
    } else if ( this.lexer.match( Token.IDENTIFICADOR ) ) {
      let cadena:string = this.lexer.obtenerValor();
      this.listaInstrucciones.push(Instruccion.PUSH_IDENTIFICADOR);
      this.listaInstrucciones.push(cadena);
      this.lexer.advance();
    }
    this.factorPrimo();
  }

  expresion(): void {
    this.termino();
    this.terminoPrimo();
  }

  terminoPrimo(): void {
    if ( this.lexer.match( Token.SUMA ) ) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push( Instruccion.SUMA );
      this.terminoPrimo();
    }

    if ( this.lexer.match( Token.RESTA ) ) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push( Instruccion.RESTA );
      this.terminoPrimo();
    }
  }

  factorPrimo(): void {
    if ( this.lexer.match( Token.MULTIPLICACION ) ) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push( Instruccion.MULTIPLICACION );
      this.factorPrimo();
    }

    if ( this.lexer.match( Token.DIVISION ) ) {
      this.lexer.advance();
      this.termino();
      this.listaInstrucciones.push( Instruccion.DIVISION );
      this.factorPrimo();
    }
  }

  asignaciones(): void {
    if ( this.lexer.match( Token.IDENTIFICADOR ) && this.lexer.nextTokenIs( Token.ASIGNACION ) ) {
      this.asignacion();
      if ( !this.lexer.match( Token.PUNTO_COMA ) ) {
        console.log( "Error: Se esperaba ; en la instrucción de asignación" );
        return;
      }
      this.lexer.advance();
      this.asignaciones();
    }
  }

  asignacion(): void {

    let cadena: string = this.lexer.obtenerValor();

    let id: Variable = new Variable( cadena );
    if ( !(id.contains( this.tablaDeSimbolos )) ) {
      this.tablaDeSimbolos.push( id );
    }

    this.lexer.advance();
    this.lexer.advance();

    this.asignaciones();

    this.expresion();

    this.valoresLogicos();

    this.listaInstrucciones.push( Instruccion.ASIGNACION );
    this.listaInstrucciones.push( this.tablaDeSimbolos.indexOf( id ) );

  }

  valoresLogicos():void{
    if ( this.lexer.match( Token.FALSE ) ) {
      let valorFalse: string = this.lexer.obtenerValor();
      this.listaInstrucciones.push( Instruccion.PUSH_VALOR_LOGICO );
      this.listaInstrucciones.push( valorFalse );
      this.lexer.advance();

    } else if ( this.lexer.match( Token.TRUE ) ) {

      let valorTrue: string = this.lexer.obtenerValor();
      this.listaInstrucciones.push( Instruccion.PUSH_VALOR_LOGICO );
      this.listaInstrucciones.push( valorTrue );
      this.lexer.advance();
    }
  }



  obtenerInstrucciones(): Array<Object> {
    return this.listaInstrucciones;
  }

  obtenerTablaDeSimbolos(): Array<Variable> {
    return this.tablaDeSimbolos;
  }
}

export { Parser };