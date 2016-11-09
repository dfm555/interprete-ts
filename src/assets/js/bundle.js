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
	/**
	 * Created by duber on 12/09/16.
	 */
	var Lexer_1 = __webpack_require__(2);
	var Token_1 = __webpack_require__(3);
	/* class app */
	var App = (function () {
	    function App() {
	    }
	    App.init = function () {
	        var programa = document.getElementById('code').value;
	        if (programa !== '') {
	            var lexer = new Lexer_1.Lexer(programa);
	            document.getElementById('result').value = "";
	            while (!lexer.match(Token_1.Token.FIN_ARCHIVO)) {
	                if (lexer.match(Token_1.Token.VALOR_ENTERO)) {
	                    document.getElementById('result').value += "Entero " + lexer.obtenerEntero() + "\n";
	                }
	                if (lexer.match(Token_1.Token.SUMA)) {
	                    document.getElementById('result').value += "Suma " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.RESTA)) {
	                    document.getElementById('result').value += "Resta " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MULTIPLICACION)) {
	                    document.getElementById('result').value += "Multiplicacion " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.VALOR_REAL)) {
	                    document.getElementById('result').value += "Real " + lexer.obtenerReal() + "\n";
	                }
	                if (lexer.match(Token_1.Token.ABRIR_PARENTESIS)) {
	                    document.getElementById('result').value += "Parentesis " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.DIVISION)) {
	                    document.getElementById('result').value += "Division " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.CERRAR_PARENTESIS)) {
	                    document.getElementById('result').value += "Parentesis " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.DIVISION_ENTERA)) {
	                    document.getElementById('result').value += "Division Entera " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MODULO)) {
	                    document.getElementById('result').value += "Modulo " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.POTENCIA)) {
	                    document.getElementById('result').value += "Potencia " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MENOR_QUE)) {
	                    document.getElementById('result').value += "Menor que " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MAYOR_QUE)) {
	                    document.getElementById('result').value += "Mayor que " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.IGUAL_QUE)) {
	                    document.getElementById('result').value += "Igual que " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MENOR_IGUAL_QUE)) {
	                    document.getElementById('result').value += "Menor igual que " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.MAYOR_IGUAL_QUE)) {
	                    document.getElementById('result').value += "Mayor igual que " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.DIFERENTE)) {
	                    document.getElementById('result').value += "Diferente " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.Y_LOGICO)) {
	                    document.getElementById('result').value += "Y logico " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.O_LOGICO)) {
	                    document.getElementById('result').value += "O logico " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.NO_LOGICO)) {
	                    document.getElementById('result').value += "No logico " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.ASIGNACION)) {
	                    document.getElementById('result').value += "Asignación " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.CADENA)) {
	                    document.getElementById('result').value += "Cadena " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.ERROR)) {
	                    document.getElementById('result').value += "Error " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.VAR)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.IF)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.WHILE)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.FOR)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.CONST)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.LET)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.CLASS)) {
	                    document.getElementById('result').value += "Palabra reservada " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.ABRIR_CORCHETES)) {
	                    document.getElementById('result').value += "Corchete " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.CERRAR_CORCHETES)) {
	                    document.getElementById('result').value += "Corchete " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.IDENTIFICADOR)) {
	                    document.getElementById('result').value += "variable " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.PUNTO_COMA)) {
	                    document.getElementById('result').value += "punto y coma " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.COMA)) {
	                    document.getElementById('result').value += "Coma " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.FALSE)) {
	                    document.getElementById('result').value += "False " + lexer.obtenerValor() + "\n";
	                }
	                if (lexer.match(Token_1.Token.TRUE)) {
	                    document.getElementById('result').value += "True " + lexer.obtenerValor() + "\n";
	                }
	                lexer.advance();
	            }
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
	 * Created by duber on 12/09/16.
	 */
	"use strict";
	var Token_1 = __webpack_require__(3);
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
/* 3 */
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


/***/ }
/******/ ]);