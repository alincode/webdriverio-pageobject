function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url('http://demo.keystonejs.com/' + path)
}
module.exports = new Page()