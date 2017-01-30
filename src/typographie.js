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
	performReplace(text, table) {
		table.forEach((o, i) => text = text.replace(i, o));
		return text;
	}
}
