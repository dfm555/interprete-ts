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
	var Parser_1 = __webpack_require__(6);
	var Instruccion_1 = __webpack_require__(7);
	var VM = (function () {
	    function VM(programa) {
	        var parser = new Parser_1.Parser(new Lexer_1.Lexer(programa));
	        parser.declaraciones();
	        this.cadenaResultado = "";
	        this.listaInstrucciones = parser.obtenerInstrucciones();
	        this.tablaDeSimbolos = parser.obtenerTablaDeSimbolos();
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
	                    if (this.pilaNumeros.length > 0) {
	                        var ans = Number(this.pilaNumeros.pop());
	                        if (Math.floor(ans) == ans) {
	                            this.cadenaResultado += "ans = " + Math.floor(ans) + "\n";
	                        }
	                        else {
	                            this.cadenaResultado += "ans = " + ans + "\n";
	                        }
	                    }
	                    break;
	                case Instruccion_1.Instruccion.POP:
	                    if (this.pilaNumeros.length > 0) {
	                        this.pilaNumeros.pop();
	                    }
	                    break;
	                case Instruccion_1.Instruccion.SUMA:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if (typeof numero1 == "string" || typeof numero2 == "string") {
	                            this.pilaNumeros.push(String(numero1) + String(numero2));
	                        }
	                        else {
	                            if ((Number(numero1) % 1 === 0)
	                                && (Number(numero2) % 1 === 0)) {
	                                this.pilaNumeros.push(Math.floor(Number(numero1))
	                                    + Math.floor(Number(numero2)));
	                            }
	                            else {
	                                this.pilaNumeros.push(Number(numero1) + Number(numero2));
	                            }
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.RESTA:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
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
	                case Instruccion_1.Instruccion.MULTIPLICACION:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
	                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
	                            this.pilaNumeros.push(Math.floor(numero1)
	                                * Math.floor(numero2));
	                        }
	                        else {
	                            this.pilaNumeros.push(numero1 * numero2);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.DIVISION:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if ((Number(numero1) === numero1 && numero1 % 1 === 0)
	                            && (Number(numero2) === numero2 && numero2 % 1 === 0)) {
	                            if (numero2 != 0) {
	                                this.pilaNumeros.push(Math.floor(numero1)
	                                    / Math.floor(numero2));
	                            }
	                            else {
	                                throw new Error("Error: Division por cero");
	                            }
	                        }
	                        else {
	                            if (numero2 != 0) {
	                                this.pilaNumeros.push(numero1 / numero2);
	                            }
	                            else {
	                                throw new Error("Error: Division por cero");
	                            }
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.MENOR_QUE:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if (numero1 < numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.MENOR_IGUAL_QUE:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if (numero1 <= numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.MAYOR_QUE:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if (numero1 > numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.MAYOR_IGUAL_QUE:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = Number(this.pilaNumeros.pop());
	                        var numero1 = Number(this.pilaNumeros.pop());
	                        if (numero1 >= numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.DIFERENTE:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if (numero1 != numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.IGUAL:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if (numero1 == numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.O_LOGICO:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if (numero1 || numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.Y_LOGICO:
	                    if (this.pilaNumeros.length > 1) {
	                        var numero2 = this.pilaNumeros.pop();
	                        var numero1 = this.pilaNumeros.pop();
	                        if (numero1 && numero2) {
	                            this.pilaNumeros.push(true);
	                        }
	                        else {
	                            this.pilaNumeros.push(false);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.NO_LOGICO:
	                    if (this.pilaNumeros.length > 0) {
	                        var numero1 = this.pilaNumeros.pop();
	                        if (numero1) {
	                            this.pilaNumeros.push(false);
	                        }
	                        else {
	                            this.pilaNumeros.push(true);
	                        }
	                    }
	                    else {
	                        throw new Error("Error: Falta operando.");
	                    }
	                    break;
	                case Instruccion_1.Instruccion.PUSH_NUMERO_ENTERO:
	                    ++i;
	                    this.pilaNumeros.push(Number(this.listaInstrucciones[i]));
	                    break;
	                case Instruccion_1.Instruccion.PUSH_NUMERO_REAL:
	                    ++i;
	                    this.pilaNumeros.push(Number(this.listaInstrucciones[i]));
	                    break;
	                case Instruccion_1.Instruccion.PUSH_IDENTIFICADOR:
	                    ++i;
	                    var variable = this.listaInstrucciones[i].toString();
	                    var varIndex = this.arrayObjectIndexOf(this.tablaDeSimbolos, variable, "nombre");
	                    var tipo = this.tablaDeSimbolos[varIndex].tipo;
	                    var valor = this.tablaDeSimbolos[varIndex].valor;
	                    if (tipo == 'logico') {
	                        valor = Boolean(valor);
	                    }
	                    else if (tipo == 'entero' || tipo == 'real') {
	                        valor = Number(valor);
	                    }
	                    this.pilaNumeros.push(valor);
	                    break;
	                case Instruccion_1.Instruccion.PUSH_VALOR_LOGICO:
	                    ++i;
	                    this.pilaNumeros.push(Boolean(this.listaInstrucciones[i]));
	                    break;
	                case Instruccion_1.Instruccion.PUSH_CADENA:
	                    ++i;
	                    this.pilaNumeros.push(String(this.listaInstrucciones[i]));
	                    break;
	                case Instruccion_1.Instruccion.ASIGNACION:
	                    ++i;
	                    var index = Number(this.listaInstrucciones[i]);
	                    if (this.pilaNumeros.length > 0) {
	                        var numero1 = this.pilaNumeros.pop();
	                        this.pilaNumeros.push(Number(numero1));
	                        if (typeof numero1 === "number") {
	                            if (Number(numero1) % 1 === 0) {
	                                this.tablaDeSimbolos[index].tipo = "entero";
	                                this.tablaDeSimbolos[index].valor = String(numero1);
	                            }
	                            else {
	                                this.tablaDeSimbolos[index].tipo = "real";
	                                this.tablaDeSimbolos[index].valor = String(numero1);
	                            }
	                        }
	                        else if (typeof numero1 === "string") {
	                            this.tablaDeSimbolos[index].tipo = "cadena";
	                            this.tablaDeSimbolos[index].valor = "" + numero1;
	                        }
	                        else if (typeof numero1 === "boolean") {
	                            this.tablaDeSimbolos[index].tipo = "logico";
	                            this.tablaDeSimbolos[index].valor = numero1;
	                        }
	                    }
	                    this.cadenaResultado += this.tablaDeSimbolos[index].toString() + "\n";
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
	    VM.prototype.arrayObjectIndexOf = function (myArray, searchTerm, property) {
	        for (var i = 0, len = myArray.length; i < len; i++) {
	            if (myArray[i][property] === searchTerm)
	                return i;
	        }
	        return -1;
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
	var KeyWords_1 = __webpack_require__(5);
	var Lexer = (function () {
	    function Lexer(expresion) {
	        this.establecer(expresion);
	        this.palabrasReservadas = new KeyWords_1.KeyWords();
	        this.palabrasReservadas.Add('false', Token_1.Token.FALSE);
	        this.palabrasReservadas.Add('true', Token_1.Token.TRUE);
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
	                    ++this.longitud;
	                    return Token_1.Token.CADENA;
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
	                    else if (this.isAlfabeto(caracter)) {
	                        while (this.posicion + this.longitud < n
	                            && (this.isDigit(this.expresion.charAt(this.posicion
	                                + this.longitud)) || this.isAlfabeto(this.expresion.charAt(this.posicion
	                                + this.longitud)))) {
	                            ++this.longitud;
	                        }
	                        var cadena = this.obtenerValor();
	                        if (!this.palabrasReservadas.ContainsKey(cadena)) {
	                            return Token_1.Token.IDENTIFICADOR;
	                        }
	                        else {
	                            return Number(this.palabrasReservadas.Item(cadena));
	                        }
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
	    Lexer.prototype.nextTokenIs = function (token) {
	        var auxiliarPosicion = this.posicion;
	        var auxiliarLongitud = this.longitud;
	        var ans = this.getToken() == token;
	        this.posicion = auxiliarPosicion;
	        this.longitud = auxiliarLongitud;
	        return ans;
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
/***/ function(module, exports) {

	"use strict";
	var KeyWords = (function () {
	    function KeyWords() {
	        this.items = {};
	        this.count = 0;
	    }
	    KeyWords.prototype.ContainsKey = function (key) {
	        return this.items.hasOwnProperty(key);
	    };
	    KeyWords.prototype.Count = function () {
	        return this.count;
	    };
	    KeyWords.prototype.Add = function (key, value) {
	        this.items[key] = value;
	        this.count++;
	    };
	    KeyWords.prototype.Remove = function (key) {
	        var val = this.items[key];
	        delete this.items[key];
	        this.count--;
	        return val;
	    };
	    KeyWords.prototype.Item = function (key) {
	        return this.items[key];
	    };
	    KeyWords.prototype.Keys = function () {
	        var keySet = [];
	        for (var prop in this.items) {
	            if (this.items.hasOwnProperty(prop)) {
	                keySet.push(prop);
	            }
	        }
	        return keySet;
	    };
	    KeyWords.prototype.Values = function () {
	        var values = [];
	        for (var prop in this.items) {
	            if (this.items.hasOwnProperty(prop)) {
	                values.push(this.items[prop]);
	            }
	        }
	        return values;
	    };
	    return KeyWords;
	}());
	exports.KeyWords = KeyWords;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by duber on 10/11/16.
	 */
	"use strict";
	var Token_1 = __webpack_require__(4);
	var Instruccion_1 = __webpack_require__(7);
	var Variable_1 = __webpack_require__(8);
	var Parser = (function () {
	    function Parser(lexer) {
	        this.lexer = lexer;
	        this.listaInstrucciones = new Array;
	        this.tablaDeSimbolos = new Array;
	    }
	    Parser.prototype.declaraciones = function () {
	        while (!this.lexer.match(Token_1.Token.FIN_ARCHIVO)) {
	            this.asignaciones();
	            this.expresiones();
	        }
	        this.listaInstrucciones.push(Instruccion_1.Instruccion.FIN);
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
	        this.factor();
	        this.factorPrimo();
	    };
	    Parser.prototype.expresion = function () {
	        this.termino();
	        this.terminoPrimo();
	        this.terminoRelacional();
	        this.terminoComparacion();
	        this.terminoLogico();
	    };
	    Parser.prototype.factor = function () {
	        if (this.lexer.match(Token_1.Token.NO_LOGICO)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.NO_LOGICO);
	            this.terminoRelacional();
	        }
	        if (this.lexer.match(Token_1.Token.VALOR_ENTERO)) {
	            var entero = this.lexer.obtenerEntero();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_NUMERO_ENTERO);
	            this.listaInstrucciones.push(entero);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.VALOR_REAL)) {
	            var real = this.lexer.obtenerReal();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_NUMERO_REAL);
	            this.listaInstrucciones.push(real);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.ABRIR_PARENTESIS)) {
	            this.lexer.advance();
	            this.expresion();
	            if (!this.lexer.match(Token_1.Token.CERRAR_PARENTESIS)) {
	                console.log("Error: Se esperaba )");
	                return;
	            }
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.IDENTIFICADOR)) {
	            var cadena = this.lexer.obtenerValor();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_IDENTIFICADOR);
	            this.listaInstrucciones.push(cadena);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.FALSE)) {
	            if (this.lexer.nextTokenIs(Token_1.Token.ASIGNACION)) {
	                alert("Error: false es una palabra reservada");
	                throw new Error("Error: Es una palabra reservada");
	            }
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_VALOR_LOGICO);
	            this.listaInstrucciones.push(false);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.TRUE)) {
	            if (this.lexer.nextTokenIs(Token_1.Token.ASIGNACION)) {
	                alert("Error: true es una palabra reservada");
	                throw new Error("Error: Es una palabra reservada");
	            }
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_VALOR_LOGICO);
	            this.listaInstrucciones.push(true);
	            this.lexer.advance();
	        }
	        else if (this.lexer.match(Token_1.Token.CADENA)) {
	            var cadena = this.lexer.obtenerValor();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.PUSH_CADENA);
	            this.listaInstrucciones.push(cadena.split('"').join(""));
	            this.lexer.advance();
	        }
	    };
	    Parser.prototype.terminoPrimo = function () {
	        if (this.lexer.match(Token_1.Token.SUMA)) {
	            this.lexer.advance();
	            this.termino();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.SUMA);
	            this.terminoPrimo();
	        }
	        if (this.lexer.match(Token_1.Token.RESTA)) {
	            this.lexer.advance();
	            this.termino();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.RESTA);
	            this.terminoPrimo();
	        }
	    };
	    Parser.prototype.factorPrimo = function () {
	        if (this.lexer.match(Token_1.Token.MULTIPLICACION)) {
	            this.lexer.advance();
	            this.factor();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.MULTIPLICACION);
	            this.factorPrimo();
	        }
	        if (this.lexer.match(Token_1.Token.DIVISION)) {
	            this.lexer.advance();
	            this.factor();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.DIVISION);
	            this.factorPrimo();
	        }
	    };
	    Parser.prototype.terminoRelacional = function () {
	        if (this.lexer.match(Token_1.Token.MENOR_QUE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.MENOR_QUE);
	            this.terminoRelacional();
	        }
	        if (this.lexer.match(Token_1.Token.MENOR_IGUAL_QUE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.MENOR_IGUAL_QUE);
	            this.terminoRelacional();
	        }
	        if (this.lexer.match(Token_1.Token.MAYOR_QUE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.MAYOR_QUE);
	            this.terminoRelacional();
	        }
	        if (this.lexer.match(Token_1.Token.MAYOR_IGUAL_QUE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.MAYOR_IGUAL_QUE);
	            this.terminoRelacional();
	        }
	    };
	    Parser.prototype.terminoComparacion = function () {
	        if (this.lexer.match(Token_1.Token.DIFERENTE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.DIFERENTE);
	            this.terminoComparacion();
	        }
	        if (this.lexer.match(Token_1.Token.IGUAL_QUE)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.IGUAL);
	            this.terminoComparacion();
	        }
	    };
	    Parser.prototype.terminoLogico = function () {
	        if (this.lexer.match(Token_1.Token.Y_LOGICO)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.Y_LOGICO);
	            this.terminoLogico();
	        }
	        if (this.lexer.match(Token_1.Token.O_LOGICO)) {
	            this.lexer.advance();
	            this.expresion();
	            this.listaInstrucciones.push(Instruccion_1.Instruccion.O_LOGICO);
	            this.terminoLogico();
	        }
	    };
	    Parser.prototype.asignaciones = function () {
	        if (this.lexer.match(Token_1.Token.IDENTIFICADOR) && this.lexer.nextTokenIs(Token_1.Token.ASIGNACION)) {
	            this.asignacion();
	            if (!this.lexer.match(Token_1.Token.PUNTO_COMA)) {
	                console.log("Error: Se esperaba ; en la instrucción de asignación");
	                return;
	            }
	            this.lexer.advance();
	            this.asignaciones();
	        }
	    };
	    Parser.prototype.asignacion = function () {
	        var cadena = this.lexer.obtenerValor();
	        var id = new Variable_1.Variable(cadena);
	        if (!(id.contains(this.tablaDeSimbolos))) {
	            this.tablaDeSimbolos.push(id);
	        }
	        this.lexer.advance();
	        this.lexer.advance();
	        this.asignaciones();
	        this.expresion();
	        this.listaInstrucciones.push(Instruccion_1.Instruccion.ASIGNACION);
	        this.listaInstrucciones.push(this.tablaDeSimbolos.indexOf(id));
	    };
	    Parser.prototype.obtenerInstrucciones = function () {
	        return this.listaInstrucciones;
	    };
	    Parser.prototype.obtenerTablaDeSimbolos = function () {
	        return this.tablaDeSimbolos;
	    };
	    return Parser;
	}());
	exports.Parser = Parser;


/***/ },
/* 7 */
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
	Instruccion.PUSH_IDENTIFICADOR = 102;
	Instruccion.PUSH_VALOR_LOGICO = 103;
	Instruccion.PUSH_CADENA = 104;
	Instruccion.ASIGNACION = 105;
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


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var Variable = (function () {
	    function Variable(nombre) {
	        this.nombre = nombre;
	        this.tipo = '';
	        this.valor = '';
	    }
	    Variable.prototype.contains = function (list) {
	        var i;
	        for (i = 0; i < list.length; i++) {
	            if (list[i].nombre === this.nombre) {
	                return true;
	            }
	        }
	        return false;
	    };
	    Variable.prototype.toString = function () {
	        return "ID => " + "Nombre: " + this.nombre + ", tipo : " + this.tipo + ", valor: " + this.valor;
	    };
	    return Variable;
	}());
	exports.Variable = Variable;


/***/ }
/******/ ]);