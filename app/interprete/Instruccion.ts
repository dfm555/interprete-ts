/**
 * Created by duber on 10/11/16.
 */
class Instruccion {
    static  FIN:number = -1;
    //
    static  SUMA:number = 1;
    static  RESTA:number = 2;
    static  MULTIPLICACION:number = 3;
    static  DIVISION:number = 4;
    static  POTENCIA:number = 5;
    static  MODULO:number = 6;
    static  DIVISION_ENTERA:number = 7;

    static  MENOR_QUE:number = 11;
    static  MAYOR_QUE:number = 12;
    static  IGUAL:number = 13;
    static  MENOR_IGUAL_QUE:number = 14;
    static  MAYOR_IGUAL_QUE:number = 15;
    static  DIFERENTE:number = 16;
    //
    static  Y_LOGICO:number = 17;
    static  O_LOGICO:number = 18;
    static  NO_LOGICO:number = 19;
    //
    static  PUSH_NUMERO_ENTERO:number = 100;
    static  PUSH_NUMERO_REAL:number = 101;

    static  PRINT:number = 200;
    static  POP:number = 201;

    // Funciones
    static  RAIZ_CUADRADA:number = 400;
    static  VALOR_ABSOLUTO:number = 401;
    static  LOGARITMO_NATURAL:number = 402;
    static  EXPONENCIAL:number = 403;
    static  SENO:number = 404;
    static  COSENO:number = 405;
    static  TANGENTE:number = 406;
    static  ALEATORIO:number = 407;
}

export {Instruccion};