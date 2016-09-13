/**
 * Created by duber on 12/09/16.
 */
class Token {
    public static FIN_ARCHIVO: number = -1;
    //
    public static ERROR:number = -2;
    //
    public static  SUMA:number = 1;
    public static  RESTA:number = 2;
    public static  MULTIPLICACION:number = 3;
    public static  DIVISION:number = 4;
    public static  POTENCIA:number = 5;
    public static  MODULO:number = 6;
    public static  DIVISION_ENTERA:number = 7;
 
    public static  ABRIR_PARENTESIS:number = 8;
    public static  CERRAR_PARENTESIS:number = 9;
    public static  PI:number = 10;

    //
    public static  MENOR_QUE:number = 11;
    public static  MAYOR_QUE:number = 12;
    public static  IGUAL_QUE:number = 13;
    public static  MENOR_IGUAL_QUE:number = 14;
    public static  MAYOR_IGUAL_QUE:number = 15;
    public static  DIFERENTE:number = 16;
    //
    public static  Y_LOGICO:number = 17;
    public static  O_LOGICO:number = 18;
    public static  NO_LOGICO:number = 19;

    public static  ABRIR_CORCHETES:number = 20;
    public static  CERRAR_CORCHETES:number = 21;
    public static  COMA:number = 22;
    public static  PUNTO_COMA:number = 23;
    public static  COMILLA:number = 24;
    //
    public static  VALOR_ENTERO:number = 100;
    public static  VALOR_REAL:number = 101;

}

export {Token}