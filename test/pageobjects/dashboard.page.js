var Page = require('./page')
var DashBoardPage = Object.create(Page, {
    /**
     * 定義元素
     */
    logoutLink: { get: function () { return browser.element('[title="Sign Out"]') } },

    open: { value: function() {
        Page.open.call(this, 'keystone');
    } },

    logout: { value: function() {
        this.logoutLink.click();
    } }
});
module.exports = DashBoardPage;