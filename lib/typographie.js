(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Typographie", [], factory);
	else if(typeof exports === 'object')
		exports["Typographie"] = factory();
	else
		root["Typographie"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typographie = function () {
		function Typographie(actionlist) {
			_classCallCheck(this, Typographie);

			this.actions(actionlist);
			this._preserved = [];
		}

		_createClass(Typographie, [{
			key: 'actions',
			value: function actions(actionlist) {
				this._actions = actionlist;
			}
		}, {
			key: 'process',
			value: function process(text) {
				if (this._actions.includes('specials')) {
					text = this.processSpecials(text);
				}
				if (this._actions.includes('mathchars')) {
					text = this.processMath(text);
				}
				if (this._actions.includes('mathchars') || this._actions.includes('dashes')) {
					text = this.processMinuses(text);
				}
				if (this._actions.includes('punctuation')) {
					text = this.processPunctuation(text);
				}
				if (this._actions.includes('specialspaces')) {
					text = this.processSpecialSpaces(text);
				}
				if (this._actions.includes('angles')) {
					text = this.processAngles(text);
				}
				if (this._actions.includes('dblspace')) {
					text = this.processMultipleSpaces(text);
				}
				if (this._actions.includes('quotes')) {
					text = this.processQoutes(text);

					if (this._actions.includes('inquot')) {
						text = this.processInnerQoutes(text);
					} else {
						text = this.processStackingQoutes(text);
					}
				}
				return text;
			}
		}, {
			key: 'processSpecials',
			value: function processSpecials(text) {
				var table = new Map([[/(\([cс]\))|(\{copy\})/gi, '\xA9'], [/(\(r\))|(\{reg\})/gi, '\xAE'], [/(\((тм|tm)\))|(\{(tm|trade)\})/gi, '\u2122'], [/\{(ss|sect)}/g, '\xA7'], [/\{(\*|deg)}/g, '\xB0'], [/\{euro}/g, '\u20AC'], [/\{cent}/g, '\xA2'], [/\{pound}/g, '\xA3'], [/\{(yen|yuan)}/g, '\xA5'], [/\{alpha\}/gi, '\u03B1'], [/\{beta\}/gi, '\u03B2'], [/\{gamma\}/gi, '\u03B3'], [/\{delta\}/gi, '\u03B4'], [/\{epsilon\}/gi, '\u03B5'], [/\{theta\}/gi, '\u03B8'], [/\{lambda\}/gi, '\u03BB'], [/\{mu\}/gi, '\u03BC'], [/\{nu\}/gi, '\u03BD'], [/\{pi\}/gi, '\u03C0'], [/\{rho\}/gi, '\u03C1'], [/\{sigma\}/gi, '\u03C3'], [/\{tau\}/gi, '\u03C4'], [/\{phi\}/gi, '\u03C6'], [/\{psi\}/gi, '\u03A8'], [/\{omega\}/gi, '\u03C9']]);
				return this.performReplace(text, table);
			}
		}, {
			key: 'processMath',
			value: function processMath(text) {
				var table = new Map([[/\{!=}/g, '\u2260'], [/\{~}/g, '\u2248'], [/\{equal}/g, '\u2261'], [/\{<=}/g, '\u2A7D'], [/\{=>}/g, '\u2A7E'], [/\+-/g, '\xB1'], [/\{-}/g, '\u2013'], [/\{multiple}/g, '\xD7'], [/\{divide}/g, '\xF7'], [/<->/g, '\u2194'], [/<=>/g, '\u21D4'], [/<-/g, '\u2190'], [/<=/g, '\u21D0'], [/->/g, '\u2192'], [/=>/g, '\u21D2'], [/\{\^1}/g, '\xB9'], [/\{\^2}/g, '\xB2'], [/\{\^3}/g, '\xB3'], [/\{1\/8}/g, '\u215B'], [/\{1\/6}/g, '\u2159'], [/\{1\/5}/g, '\u2155'], [/\{1\/4}/g, '\xBC'], [/\{1\/3}/g, '\u2153'], [/\{1\/2}/g, '\xBD'], [/\{2\/5}/g, '\u2156'], [/\{2\/3}/g, '\u2154'], [/\{3\/8}/g, '\u215C'], [/\{3\/5}/g, '\u2157'], [/\{3\/4}/g, '\xBE'], [/\{4\/5}/g, '\u2158'], [/\{5\/6}/g, '\u215A'], [/\{5\/8}/g, '\u215D'], [/\{7\/8}/g, '\u215E'], [/\{part}/g, '\u2202'], [/\{any}/g, '\u2200'], [/\{exist}/g, '\u2203'], [/\{sum}/g, '\u03A3'], [/\{empty}/g, '\u2205'], [/\{infinity}/g, '\u221E'], [/\{belong}/g, '\u2208'], [/\{!belong}/g, '\u2209'], [/\{union}/g, '\u222A'], [/\{intersection}/g, '\u2229'], [/\{v}/g, '\u221A'], [/\{v3}/g, '\u221B'], [/\{v4}/g, '\u221C'], [/\{ang}/g, '\u2220']]);
				return this.performReplace(text, table);
			}
		}, {
			key: 'processMinuses',
			value: function processMinuses(text) {
				return text.replace(/([ ])-(?=[\d])/g, '$1\u2013').replace(/^-(?=[\d])/gm, '\u2013');
			}
		}, {
			key: 'processPunctuation',
			value: function processPunctuation(text) {
				var table = new Map();

				if (this._actions.includes('dashes')) {
					table.set(/[-]{2,5}/g, '\u2013');
				}

				table.set(/(^|\s)([-\u2013])(?=[^\s])/gm, '$1$2 ');
				table.set(/([^\s])([-\u2013])($|\s)/gm, '$1 $2$3');
				table.set(/([.,!?:)])(?=[^ \n"\'.,;!?&:\]\)<»{)])/g, '$1 ');
				table.set(/[ ]*(?=[.,;!?:])/g, '');

				if (this._actions.includes('nbsp')) {
					table.set(/ ([-\u2013])/g, '\xA0$1');
				}

				var _preserveParts = this.preserveParts(text, [/[\d]+([.,][\d]+)+/g, /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/gi, /((([a-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[a-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[a-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi, /[:;.][\'_-]{0,2}[.,edpobnsu*#@|()&\$308ехорвъэ]/gi]),
				    preservedText = _preserveParts.preservedText,
				    parts = _preserveParts.parts;

				preservedText = this.performReplace(preservedText, table);
				return this.restoreParts(preservedText, parts);
			}
		}, {
			key: 'processSpecialSpaces',
			value: function processSpecialSpaces(text) {
				var table = new Map([[/([\u2116\u00a7])[\s]*(?=[\d])/g, '$1 '], [/([\d])[\s]*(?=\u00b0[CСF])/g, '$1 '], [/([\d])[\s]*(?=%)/g, '$1']]);
				return this.performReplace(text, table);
			}
		}, {
			key: 'processAngles',
			value: function processAngles(text) {
				var table = new Map([[/(\d)\*/g, '$1\xB0'], [/(\d)\'/g, '$1\u2032'], [/(^[^"]*\d)"([^"]*$)/g, '$1\u2033$2'], [/("[^"]*\d)"([^"]*?")/g, '$1\u2033$2']]);
				return this.performReplace(text, table);
			}
		}, {
			key: 'processMultipleSpaces',
			value: function processMultipleSpaces(text) {
				return text.replace(/[ ]{2,}/g, ' ');
			}
		}, {
			key: 'processQoutes',
			value: function processQoutes(text) {
				var table = new Map([[/(^|[\s>};\(\[-])"/g, '$1\xAB'], [/"([\s-\.!,:;\?\)\]\n\r]|$)/g, '\xBB$1'], [/([^\s{])"([^\s}])/g, '$1\xBB$2'], [/(\u00ab[^\s\u00ab]*)\u00bb(.*?\u00bb.*?\u00bb)/g, '$1\xAB$2']]);
				return this.performReplace(text, table);
			}
		}, {
			key: 'processInnerQoutes',
			value: function processInnerQoutes(text) {
				while (text.match(/(\u00ab[^\u00ab\u00bb]*)\u00ab/m)) {
					text = text.replace(/(\u00ab[^\u00ab\u00bb]*)\u00ab/gm, '$1\u201E');
					text = text.replace(/(\u201e[^\u201e\u201c\u00ab\u00bb]*)\u00bb/gm, '$1\u201C');
				}
				return text;
			}
		}, {
			key: 'processStackingQoutes',
			value: function processStackingQoutes(text) {
				return text.replace(/\u00ab{2,}/g, '\xAB').replace(/\u00bb{2,}/g, '\xBB');
			}
		}, {
			key: 'performReplace',
			value: function performReplace(text, table) {
				table.forEach(function (o, i) {
					return text = text.replace(i, o);
				});
				return text;
			}
		}, {
			key: 'preserveParts',
			value: function preserveParts(text, exceptions) {
				var parts = new Map();
				exceptions.map(function (pattern) {
					return text = text.replace(pattern, function (match) {
						var code = String(Math.random()).substr(2);
						parts.set(code, match);
						return '{' + code + '}';
					});
				});
				return { preservedText: text, parts: parts };
			}
		}, {
			key: 'restoreParts',
			value: function restoreParts(text, parts) {
				parts.forEach(function (o, i) {
					return text = text.replace('{' + i + '}', o);
				});
				return text;
			}
		}]);

		return Typographie;
	}();

	exports.default = Typographie;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;