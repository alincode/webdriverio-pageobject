// ES6 的寫法
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
		browser.url(path);
	}
}
module.exports = new Page();