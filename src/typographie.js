export default class Typographie {
	constructor(actionlist) {
		this.actions(actionlist);
		this._preserved = [];
	}
	actions(actionlist) {
		this._actions = actionlist;
	}
	process(text) {
		return text;
	}
}
