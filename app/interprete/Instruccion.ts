/**
 * Created by duber on 10/11/16.
 */
class Instruccion {
    static readonly FIN:number = -1;
    //
    static readonly SUMA:number = 1;
    static readonly RESTA:number = 2;
    static readonly MULTIPLICACION:number = 3;
    static readonly DIVISION:number = 4;
    static readonly POTENCIA:number = 5;
    static readonly MODULO:number = 6;
    static readonly DIVISION_ENTERA:number = 7;

    static readonly MENOR_QUE:number = 11;
    static readonly MAYOR_QUE:number = 12;
    static readonly IGUAL:number = 13;
    static readonly MENOR_IGUAL_QUE:number = 14;
    static readonly MAYOR_IGUAL_QUE:number = 15;
    static readonly DIFERENTE:number = 16;
    //
    static readonly Y_LOGICO:number = 17;
    static readonly O_LOGICO:number = 18;
    static readonly NO_LOGICO:number = 19;
    //
    static readonly PUSH_NUMERO_ENTERO:number = 100;
    static readonly PUSH_NUMERO_REAL:number = 101;

    static readonly PRINT:number = 200;
    static readonly POP:number = 201;

    // Funciones
    static readonly RAIZ_CUADRADA:number = 400;
    static readonly VALOR_ABSOLUTO:number = 401;
    static readonly LOGARITMO_NATURAL:number = 402;
    static readonly EXPONENCIAL:number = 403;
    static readonly SENO:number = 404;
    static readonly COSENO:number = 405;
    static readonly TANGENTE:number = 406;
    static readonly ALEATORIO:number = 407;
}

export {Instruccion};