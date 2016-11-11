/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var VM_1 = __webpack_require__(2);
	/* class app */
	var App = (function () {
	    function App() {
	    }
	    App.init = function () {
	        var programa = document.getElementById('code').value;
	        if (programa !== '') {
	            //
	            //        Lexer lexer = new Lexer(expresion);
	            //        Parser parser = new Parser(lexer);
	            //        parser.declaraciones();
	            //
	            var calculadora = new VM_1.VM(programa);
	            calculadora.run();
	            document.getElementById('result').value = "\n" + calculadora.getAnswer();
	        }
	        else {
	            document.getElementById('result').value = "Digite su código";
	        }
	    };
	    App.main = function () {
	        document.getElementById('generate').addEventListener('click', this.init);
	    };
	    return App;
	}());
	App.main();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by duber on 10/11/16.
	 */
	"use strict";
	var Lexer_1 = __webpack_require__(3);
	var Parser_1 = __webpack_require__(5);
	var Instruccion_1 = __webpack_require__(6);
	var VM = (function () {
	    function VM(programa) {
	        var parser = new Parser_1.Parser(new Lexer_1.Lexer(programa));
	        parser.declaraciones();
	        this.cadenaResultado = "";
	        this.listaInstrucciones = parser.obtenerInstrucciones();
	        //noinspection JSAnnotator
				this.pilaNumeros = new Array;
	    }
	    VM.prototype.run = function () {
	        var n = this.listaInstrucciones.length;
	        var i = 0;
	        while (i < n) {
	            var operacion = Number(this.listaInstrucciones[i]);
	            switch (operacion) {
	                case Instruccion_1.Instruccion.FIN:
	                    return;
	                case Instruccion_1.Instruccion.PRINT:
	                    console.log("print");
	                    if (this.pilaNumeros.length > 0) {
	                        var ans = this.pilaNumeros.pop();
	                        if (Math.floor(ans) == ans) {
	                            this.cadenaResultado += "ans = " + Math.floor(ans) + "\n";
	                        }
	                        else {
	                            this.cadenaResultado += "ans = " + ans + "\n";
	                        }
	                    }
	                    break;
	                case Instruccion_1.Instruccion.POP:
	                    console.log("pop");
	                    if (this.pilaNumeros.length > 0) {
	                        this.pilaNumeros.pop();
	                    }
	                    break;
	                case Instruccion_1.Instruccion.SUMA:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
	                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
	                            this.pilaNumeros.push(Math.floor(numero1)
	                                + Math.floor(numero2));
	                        }
	                        else {
	                            this.pilaNumeros.push(numero1 + numero2);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.RESTA:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
	                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
	                            this.pilaNumeros.push(Math.floor(numero1)
	                                - Math.floor(numero2));
	                        }
	                        else {
	                            this.pilaNumeros.push(numero1 - numero2);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.PUSH_NUMERO_ENTERO:
	                    ++i;
	                    //System.out.println("ENTERO: " + listaInstrucciones.get(i));
	                    this.pilaNumeros.push(this.listaInstrucciones[i]);
	                    break;
	                case Instruccion_1.Instruccion.PUSH_NUMERO_REAL:
	                    ++i;
	                    this.pilaNumeros.push(Math.round(this.listaInstrucciones[i]));
	                    break;
	                default:
	                    return;
	            }
	            ++i;
	        }
	    };
	    VM.prototype.getAnswer = function () {
	        return this.cadenaResultado;
	    };
	    return VM;
	}());
	exports.VM = VM;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by duber on 12/09/16.
	 */
	"use strict";
	var Token_1 = __webpack_require__(4);
	var Lexer = (function () {
	    function Lexer(expresion) {
	        this.establecer(expresion);
	    }
	    Lexer.prototype.establecer = function (expresion) {
	        this.expresion = "" + expresion;
	        this.posicion = 0;
	        this.longitud = 0;
	        this.nuevoToken = 0;
	    };
	    Lexer.prototype.getToken = function () {
	        var n = this.expresion.length;
	        this.posicion += this.longitud;
	        this.longitud = 1;
	        while (this.posicion < n && this.expresion.charAt(this.posicion) == ' ') {
	            this.posicion++;
	        }
	        if (this.posicion < n) {
	            var caracter = this.expresion.charAt(this.posicion);
	            switch (caracter) {
	                //Operadores Aritmeticos
	                case '+':
	                    return Token_1.Token.SUMA;
	                case '-':
	                    return Token_1.Token.RESTA;
	                case '*':
	                    return Token_1.Token.MULTIPLICACION;
	                case '/':
	                    return Token_1.Token.DIVISION;
	                case "¿":
	                    return Token_1.Token.DIVISION_ENTERA;
	                case '^':
	                    return Token_1.Token.POTENCIA;
	                case '%':
	                    return Token_1.Token.MODULO;
	                //Operadores relacionales
	                case '<':
	                    if (this.expresion.charAt(this.posicion + 1) == '=') {
	                        this.longitud++;
	                        return Token_1.Token.MENOR_IGUAL_QUE;
	                    }
	                    return Token_1.Token.MENOR_QUE;
	                case '>':
	                    if (this.expresion.charAt(this.posicion + 1) == '=') {
	                        this.longitud++;
	                        return Token_1.Token.MAYOR_IGUAL_QUE;
	                    }
	                    return Token_1.Token.MAYOR_QUE;
	                case '=':
	                    if (this.expresion.charAt(this.posicion + 1) == '=') {
	                        this.longitud++;
	                        return Token_1.Token.IGUAL_QUE;
	                    }
	                    return Token_1.Token.ASIGNACION;
	                case '!':
	                    if (this.expresion.charAt(this.posicion + 1) == '=') {
	                        this.longitud++;
	                        return Token_1.Token.DIFERENTE;
	                    }
	                    return Token_1.Token.NO_LOGICO;
	                //Operadores logicos 
	                case '&':
	                    return Token_1.Token.Y_LOGICO;
	                case '|':
	                    return Token_1.Token.O_LOGICO;
	                //Parentesis
	                case '(':
	                    return Token_1.Token.ABRIR_PARENTESIS;
	                case ')':
	                    return Token_1.Token.CERRAR_PARENTESIS;
	                //Corchetes
	                case '[':
	                    return Token_1.Token.ABRIR_CORCHETES;
	                case ']':
	                    return Token_1.Token.CERRAR_CORCHETES;
	                //Coma
	                case ',':
	                    return Token_1.Token.COMA;
	                //Punto y coma
	                case ';':
	                    return Token_1.Token.PUNTO_COMA;
	                //Comilla
	                case '"':
	                    while (this.posicion + this.longitud < n && this.expresion.charAt(this.posicion
	                        + this.longitud) != '"') {
	                        this.longitud++;
	                    }
	                    if (this.posicion + this.longitud == n && this.expresion.charAt(this.posicion
	                        + this.longitud) != '"') {
	                        return Token_1.Token.ERROR;
	                    }
	                    this.longitud = this.longitud + 1;
	                    return Token_1.Token.CADENA;
	                //Palabras reservadas
	                case 'f':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'o') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'r') {
	                            this.longitud++;
	                            if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                return Token_1.Token.FOR;
	                            }
	                        }
	                    }
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'a') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'l') {
	                            this.longitud++;
	                            if (this.expresion.charAt(this.posicion + this.longitud) == 's') {
	                                this.longitud++;
	                                if (this.expresion.charAt(this.posicion + this.longitud) == 'e') {
	                                    this.longitud++;
	                                    if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                        return Token_1.Token.FALSE;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    break;
	                case 'v':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'a') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'r') {
	                            this.longitud++;
	                            if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                return Token_1.Token.VAR;
	                            }
	                        }
	                    }
	                    break;
	                case 'l':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'e') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 't') {
	                            this.longitud++;
	                            if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                return Token_1.Token.LET;
	                            }
	                        }
	                    }
	                    break;
	                case 'i':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'f') {
	                        this.longitud++;
	                        if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                            return Token_1.Token.IF;
	                        }
	                    }
	                    break;
	                case 'c':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'o') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'n') {
	                            this.longitud++;
	                            if (this.expresion.charAt(this.posicion + this.longitud) == 's') {
	                                this.longitud++;
	                                if (this.expresion.charAt(this.posicion + this.longitud) == 't') {
	                                    this.longitud++;
	                                    if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                        return Token_1.Token.CONST;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'l') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'a') {
	                            this.longitud++;
	                            if (this.expresion.charAt(this.posicion + this.longitud) == 's') {
	                                this.longitud++;
	                                if (this.expresion.charAt(this.posicion + this.longitud) == 's') {
	                                    this.longitud++;
	                                    if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                        return Token_1.Token.CLASS;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    break;
	                case 'w':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'h') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'i') {
	                            this.longitud++;
	                            if (this.expresion.charAt(this.posicion + this.longitud) == 'l') {
	                                this.longitud++;
	                                if (this.expresion.charAt(this.posicion + this.longitud) == 'e') {
	                                    this.longitud++;
	                                    if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                        return Token_1.Token.WHILE;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    break;
	                case 't':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == 'r') {
	                        this.longitud++;
	                        if (this.expresion.charAt(this.posicion + this.longitud) == 'u') {
	                            this.longitud++;
	                            if (this.expresion.charAt(this.posicion + this.longitud) == 'e') {
	                                this.longitud++;
	                                if ((this.expresion.charAt(this.posicion + this.longitud) == ' ' || this.expresion.charAt(this.posicion + this.longitud) == '')) {
	                                    return Token_1.Token.TRUE;
	                                }
	                            }
	                        }
	                    }
	                    break;
	                //identificadores
	                case '@':
	                    if (this.expresion.charAt(this.posicion + this.longitud) == '_' || this.isAlfabeto(this.expresion.charAt(this.posicion + this.longitud))) {
	                        while (this.posicion + this.longitud < n
	                            && this.expresion.charAt(this.posicion
	                                + this.longitud) == "_") {
	                            this.longitud++;
	                        }
	                        if (!this.isAlfabeto(this.expresion.charAt(this.posicion
	                            + this.longitud))) {
	                            this.longitud++;
	                            return;
	                        }
	                        else {
	                            while (this.posicion + this.longitud < n && (this.isAlfabeto(this.expresion.charAt(this.posicion
	                                + this.longitud))) || this.isDigit(this.expresion.charAt(this.posicion
	                                + this.longitud))) {
	                                this.longitud++;
	                            }
	                            return Token_1.Token.IDENTIFICADOR;
	                        }
	                    }
	                    break;
	                default:
	                    if (this.isDigit(caracter)) {
	                        while (this.posicion + this.longitud < n
	                            && this.isDigit(this.expresion.charAt(this.posicion
	                                + this.longitud))) {
	                            this.longitud++;
	                        }
	                        if (this.posicion + this.longitud < n
	                            && this.expresion.charAt(this.posicion + this.longitud) == '.') {
	                            this.longitud++;
	                            while (this.posicion + this.longitud < n
	                                && this.isDigit(this.expresion.charAt(this.posicion
	                                    + this.longitud))) {
	                                this.longitud++;
	                            }
	                            return Token_1.Token.VALOR_REAL;
	                        }
	                        return Token_1.Token.VALOR_ENTERO;
	                    }
	            }
	        }
	        return Token_1.Token.FIN_ARCHIVO;
	    };
	    Lexer.prototype.advance = function () {
	        this.nuevoToken = this.getToken();
	    };
	    Lexer.prototype.match = function (token) {
	        if (this.nuevoToken == 0) {
	            this.nuevoToken = this.getToken();
	        }
	        return token == this.nuevoToken;
	    };
	    Lexer.prototype.obtenerEntero = function () {
	        return Number(this.expresion.substring(this.posicion, this.posicion
	            + this.longitud));
	    };
	    Lexer.prototype.obtenerReal = function () {
	        return Number(this.expresion.substring(this.posicion, this.posicion
	            + this.longitud));
	    };
	    Lexer.prototype.obtenerValor = function () {
	        return this.expresion.substring(this.posicion, this.posicion
	            + this.longitud);
	    };
	    Lexer.prototype.isAlfabeto = function (char) {
	        return (65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90) || (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122);
	    };
	    Lexer.prototype.isDigit = function (char) {
	        return 48 <= char.charCodeAt(0) && char.charCodeAt(0) <= 57;
	    };
	    return Lexer;
	}());
	exports.Lexer = Lexer;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by duber on 12/09/16.
	 */
	var Token = (function () {
	    function Token() {
	    }
	    return Token;
	}());
	exports.Token = Token;
	Token.FIN_ARCHIVO = -1;
	//
	Token.ERROR = -2;
	//
	Token.SUMA = 1;
	Token.RESTA = 2;
	Token.MULTIPLICACION = 3;
	Token.DIVISION = 4;
	Token.POTENCIA = 5;
	Token.MODULO = 6;
	Token.DIVISION_ENTERA = 7;
	Token.ABRIR_PARENTESIS = 8;
	Token.CERRAR_PARENTESIS = 9;
	Token.PI = 10;
	//
	Token.MENOR_QUE = 11;
	Token.MAYOR_QUE = 12;
	Token.IGUAL_QUE = 13;
	Token.MENOR_IGUAL_QUE = 14;
	Token.MAYOR_IGUAL_QUE = 15;
	Token.DIFERENTE = 16;
	//
	Token.Y_LOGICO = 17;
	Token.O_LOGICO = 18;
	Token.NO_LOGICO = 19;
	Token.ABRIR_CORCHETES = 20;
	Token.CERRAR_CORCHETES = 21;
	Token.COMA = 22;
	Token.PUNTO_COMA = 23;
	Token.CADENA = 24;
	Token.ASIGNACION = 25;
	Token.IDENTIFICADOR = 26;
	//Palabras reservadas
	Token.VAR = 27;
	Token.IF = 28;
	Token.WHILE = 29;
	Token.FOR = 30;
	Token.CONST = 31;
	Token.LET = 32;
	Token.CLASS = 33;
	Token.TRUE = 34;
	Token.FALSE = 35;
	//
	Token.VALOR_ENTERO = 100;
	Token.VALOR_REAL = 101;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by duber on 10/11/16.
	 */
	"use strict";
	var Token_1 = __webpack_require__(4);
	var Instruccion_1 = __webpack_require__(6);
	var Parser = (function () {
	    function Parser(lexer) {
	        this.lexer = lexer;
	        this.listaInstrucciones = new Array;
	    }
	    Parser.prototype.declaraciones = function () {
	        while (!this.lexer.match(Token_1.Token.FIN_ARCHIVO)) {
	            this.expresiones();
	            this.lexer.advance();
	        }
	        this.listaInstrucciones.push(Instruccion_1.Instruccion.FIN);
	        //System.out.println("Fin!");
	    };
	    Parser.prototype.expresiones = function () {
	        this.expresion();
	        if (this.lexer.match(Token_1.Token.COMA)) {
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PRINT);
	            this.lexer.advance();
	            this.expresiones();
	        }
	        else if (this.lexer.match(Token_1.Token.PUNTO_COMA)) {
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.POP);
	            this.lexer.advance();
	            this.expresiones();
	        }
	        else {
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PRINT);
	        }
	    };
	    Parser.prototype.termino = function () {
	        if (this.lexer.match(Token_1.Token.VALOR_ENTERO)) {
	            var entero = this.lexer.obtenerEntero();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_NUMERO_ENTERO);
	            this.listaInstrucciones.push(entero);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.VALOR_REAL)) {
	            var real = this.lexer.obtenerReal();
	            //System.out.println("real: " + real);
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_NUMERO_REAL);
	            this.listaInstrucciones.push(real);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.ABRIR_PARENTESIS)) {
	            console.log('(');
	            this.lexer.advance();
	            this.expresion();
	            if (!this.lexer.match(Token_1.Token.CERRAR_PARENTESIS)) {
	                console.log("Error: Se esperaba )");
	                return;
	            }
	            console.log(")");
	            this.lexer.advance();
	        }
	    };
	    Parser.prototype.expresion = function () {
	        this.termino();
	        this.expresionPrima();
	    };
	    Parser.prototype.expresionPrima = function () {
	        if (this.lexer.match(Token_1.Token.SUMA)) {
	            this.lexer.advance();
	            this.termino();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.SUMA);
	            this.expresionPrima();
	        }
	        if (this.lexer.match(Token_1.Token.RESTA)) {
	            this.lexer.advance();
	            this.termino();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.RESTA);
	            this.expresionPrima();
	        }
	    };
	    Parser.prototype.obtenerInstrucciones = function () {
	        return this.listaInstrucciones;
	    };
	    return Parser;
	}());
	exports.Parser = Parser;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by duber on 10/11/16.
	 */
	var Instruccion = (function () {
	    function Instruccion() {
	    }
	    return Instruccion;
	}());
	exports.Instruccion = Instruccion;
	Instruccion.FIN = -1;
	//
	Instruccion.SUMA = 1;
	Instruccion.RESTA = 2;
	Instruccion.MULTIPLICACION = 3;
	Instruccion.DIVISION = 4;
	Instruccion.POTENCIA = 5;
	Instruccion.MODULO = 6;
	Instruccion.DIVISION_ENTERA = 7;
	Instruccion.MENOR_QUE = 11;
	Instruccion.MAYOR_QUE = 12;
	Instruccion.IGUAL = 13;
	Instruccion.MENOR_IGUAL_QUE = 14;
	Instruccion.MAYOR_IGUAL_QUE = 15;
	Instruccion.DIFERENTE = 16;
	//
	Instruccion.Y_LOGICO = 17;
	Instruccion.O_LOGICO = 18;
	Instruccion.NO_LOGICO = 19;
	//
	Instruccion.PUSH_NUMERO_ENTERO = 100;
	Instruccion.PUSH_NUMERO_REAL = 101;
	Instruccion.PRINT = 200;
	Instruccion.POP = 201;
	// Funciones
	Instruccion.RAIZ_CUADRADA = 400;
	Instruccion.VALOR_ABSOLUTO = 401;
	Instruccion.LOGARITMO_NATURAL = 402;
	Instruccion.EXPONENCIAL = 403;
	Instruccion.SENO = 404;
	Instruccion.COSENO = 405;
	Instruccion.TANGENTE = 406;
	Instruccion.ALEATORIO = 407;


/***/ }
/******/ ]);