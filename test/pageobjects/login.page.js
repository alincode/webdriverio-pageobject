var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * 定義元素
     */
    username: { get: function () { return browser.element('[name=email]') } },
    password: { get: function () { return browser.element('[name=password]') } },
    submitButton:   { get: function () { return browser.element('[type=submit]'); } },
    successMessage:   { get: function () { return browser.element('[data-alert-type=info]'); } },
    failureMessage:   { get: function () { return browser.element('[data-alert-type=danger]'); } },

    open: { value: function() {
        Page.open.call(this, 'keystone/signin');
    } },

    submit: { value: function() {
        this.submitButton.click();
    } }
});
module.exports = LoginPage;