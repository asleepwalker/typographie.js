/*
*	Typographie.js, v1.0.0
*	(c) 2014–2017 Artyom "Sleepwalker" Fedosov <mail@asleepwalker.ru>
*	https://github.com/asleepwalker/typographie
*/

export default class Typographie {

	constructor(actionlist) {
		this.actions(actionlist);
		this._preserved = [];
	}

	actions(actionlist) {
		this._actions = actionlist;
	}

	process(text) {
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
		if (this._actions.includes('dashes')) {
			text = this.processDashes(text);
		}
		if (this._actions.includes('nbsp')) {
			text = this.processNbsps(text);
		}
		if (this._actions.includes('hellip')) {
			text = this.processHellips(text);
		}
		return text;
	}

	processSpecials(text) {
		const table = new Map([
			[/(\([cс]\))|(\{copy\})/gi          , '\u{00a9}'],
			[/(\(r\))|(\{reg\})/gi              , '\u{00ae}'],
			[/(\((тм|tm)\))|(\{(tm|trade)\})/gi , '\u{2122}'],
			[/\{(ss|sect)}/g                    , '\u{00a7}'],
			[/\{(\*|deg)}/g                     , '\u{00b0}'],
			[/\{euro}/g                         , '\u{20ac}'],
			[/\{cent}/g                         , '\u{00a2}'],
			[/\{pound}/g                        , '\u{00a3}'],
			[/\{(yen|yuan)}/g                   , '\u{00a5}'],
			[/\{alpha\}/gi                      , '\u{03b1}'],
			[/\{beta\}/gi                       , '\u{03b2}'],
			[/\{gamma\}/gi                      , '\u{03b3}'],
			[/\{delta\}/gi                      , '\u{03b4}'],
			[/\{epsilon\}/gi                    , '\u{03b5}'],
			[/\{theta\}/gi                      , '\u{03b8}'],
			[/\{lambda\}/gi                     , '\u{03bb}'],
			[/\{mu\}/gi                         , '\u{03bc}'],
			[/\{nu\}/gi                         , '\u{03bd}'],
			[/\{pi\}/gi                         , '\u{03c0}'],
			[/\{rho\}/gi                        , '\u{03c1}'],
			[/\{sigma\}/gi                      , '\u{03c3}'],
			[/\{tau\}/gi                        , '\u{03c4}'],
			[/\{phi\}/gi                        , '\u{03c6}'],
			[/\{psi\}/gi                        , '\u{03a8}'],
			[/\{omega\}/gi                      , '\u{03c9}']
		]);
		return this.performReplace(text, table);
	}

	processMath(text) {
		const table = new Map([
			[/\{!=}/g           , '\u{2260}'],
			[/\{~}/g            , '\u{2248}'],
			[/\{equal}/g        , '\u{2261}'],
			[/\{<=}/g           , '\u{2a7d}'],
			[/\{=>}/g           , '\u{2a7e}'],
			[/\+-/g             , '\u{00b1}'],
			[/\{-}/g            , '\u{2013}'],
			[/\{multiple}/g     , '\u{00d7}'],
			[/\{divide}/g       , '\u{00f7}'],
			[/<->/g             , '\u{2194}'],
			[/<=>/g             , '\u{21d4}'],
			[/<-/g              , '\u{2190}'],
			[/<=/g              , '\u{21d0}'],
			[/->/g              , '\u{2192}'],
			[/=>/g              , '\u{21d2}'],
			[/\{\^1}/g          , '\u{00b9}'],
			[/\{\^2}/g          , '\u{00b2}'],
			[/\{\^3}/g          , '\u{00b3}'],
			[/\{1\/8}/g         , '\u{215b}'],
			[/\{1\/6}/g         , '\u{2159}'],
			[/\{1\/5}/g         , '\u{2155}'],
			[/\{1\/4}/g         , '\u{00bc}'],
			[/\{1\/3}/g         , '\u{2153}'],
			[/\{1\/2}/g         , '\u{00bd}'],
			[/\{2\/5}/g         , '\u{2156}'],
			[/\{2\/3}/g         , '\u{2154}'],
			[/\{3\/8}/g         , '\u{215c}'],
			[/\{3\/5}/g         , '\u{2157}'],
			[/\{3\/4}/g         , '\u{00be}'],
			[/\{4\/5}/g         , '\u{2158}'],
			[/\{5\/6}/g         , '\u{215a}'],
			[/\{5\/8}/g         , '\u{215d}'],
			[/\{7\/8}/g         , '\u{215e}'],
			[/\{part}/g         , '\u{2202}'],
			[/\{any}/g          , '\u{2200}'],
			[/\{exist}/g        , '\u{2203}'],
			[/\{sum}/g          , '\u{03a3}'],
			[/\{empty}/g        , '\u{2205}'],
			[/\{infinity}/g     , '\u{221e}'],
			[/\{belong}/g       , '\u{2208}'],
			[/\{!belong}/g      , '\u{2209}'],
			[/\{union}/g        , '\u{222a}'],
			[/\{intersection}/g , '\u{2229}'],
			[/\{v}/g            , '\u{221a}'],
			[/\{v3}/g           , '\u{221b}'],
			[/\{v4}/g           , '\u{221c}'],
			[/\{ang}/g          , '\u{2220}']
		]);
		return this.performReplace(text, table);
	}

	processMinuses(text) {
		return text
			.replace(/([ ])-(?=[\d])/g, '$1\u{2013}')
			.replace(/^-(?=[\d])/gm, '\u{2013}');
	}

	processPunctuation(text) {
		let table = new Map();

		if (this._actions.includes('dashes')) {
			table.set(/[-]{2,5}/g, '\u{2013}');
		}

		table.set(/(^|\s)([-\u2013])(?=[^\s])/gm, '$1$2 ');
		table.set(/([^\s])([-\u2013])($|\s)/gm, '$1 $2$3');
		table.set(/([.,!?:)])(?=[^ \n"\'.,;!?&:\]\)<»{)])/g, '$1 ');
		table.set(/[ ]*(?=[.,;!?:])/g, '');

		if (this._actions.includes('nbsp')) {
			table.set(/ ([-\u2013])/g, '\u{00a0}$1');
		}

		let {preservedText, parts} = this.preserveParts(text, [
			/[\d]+([.,][\d]+)+/g,
			/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/gi,
			/((([a-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[a-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[a-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi,
			/[:;.][\'_-]{0,2}[.,edpobnsu*#@|()&\$308ехорвъэ]/gi
		]);
		preservedText = this.performReplace(preservedText, table);
		return this.restoreParts(preservedText, parts);
	}

	processSpecialSpaces(text) {
		const table = new Map([
			[/([\u2116\u00a7])[\s]*(?=[\d])/g , '$1 '],
			[/([\d])[\s]*(?=\u00b0[CСF])/g    , '$1 '],
			[/([\d])[\s]*(?=%)/g              , '$1']
		]);
		return this.performReplace(text, table);
	}

	processAngles(text) {
		const table = new Map([
			[/(\d)\*/g               , '$1\u{00b0}'],
			[/(\d)\'/g               , '$1\u{2032}'],
			[/(^[^"]*\d)"([^"]*$)/g  , '$1\u{2033}$2'],
			[/("[^"]*\d)"([^"]*?")/g , '$1\u{2033}$2']
		]);
		return this.performReplace(text, table);
	}

	processMultipleSpaces(text) {
		return text.replace(/[ ]{2,}/g, ' ');
	}

	processQoutes(text) {
		const table = new Map([
			[/(^|[\s>};\(\[-])"/g                              , '$1\u{00ab}'],
			[/"([\s-\.!,:;\?\)\]\n\r]|$)/g                     , '\u{00bb}$1'],
			[/([^\s{])"([^\s}])/g                              , '$1\u{00bb}$2'],
			[/(\u00ab[^\s\u00ab]*)\u00bb(.*?\u00bb.*?\u00bb)/g , '$1\u{00ab}$2']
		]);
		return this.performReplace(text, table);
	}

	processInnerQoutes(text) {
		while (text.match(/(\u00ab[^\u00ab\u00bb]*)\u00ab/m)) {
			text = text.replace(/(\u00ab[^\u00ab\u00bb]*)\u00ab/gm, '$1\u{201e}');
			text = text.replace(/(\u201e[^\u201e\u201c\u00ab\u00bb]*)\u00bb/gm, '$1\u{201c}');
		}
		return text;
	}

	processStackingQoutes(text) {
		return text
			.replace(/\u00ab{2,}/g, '\u{00ab}')
			.replace(/\u00bb{2,}/g, '\u{00bb}');
	}

	processDashes(text) {
		let table = new Map([
			[/(^|\n|["\u201e\u00ab])--?(\s)/gm , '$1\u{2014}$2'],
			[/([\d])-(?=[\d])/gm               , '$1\u{2013}']
		]);

		if (this._actions.includes('nbsp')) {
			table.set(/(\s)--?($|\s)/g, '\u{00a0}\u{2014}$2');
		} else {
			table.set(/(\s)--?($|\s)/g, ' \u{2014}$2');
		}

		return this.performReplace(text, table);
	}

	processNbsps(text) {
		return text.replace(/((^|[\s])[a-zа-яёіїєґ\'′]{1,2})[ ]/gi, '$1\u{00a0}');
	}

	processHellips(text) {
		return text.replace(/\.{2,5}/g, '\u{2026}');
	}

	performReplace(text, table) {
		table.forEach((o, i) => text = text.replace(i, o));
		return text;
	}

	preserveParts(text, exceptions) {
		let parts = new Map();
		exceptions.map((pattern) => text = text.replace(pattern, (match) => {
			const code = String(Math.random()).substr(2);
			parts.set(code, match);
			return '{' + code + '}';
		}));
		return { preservedText: text, parts };
	}

	restoreParts(text, parts) {
		parts.forEach((o, i) => text = text.replace('{' + i + '}', o));
		return text;
	}

}
