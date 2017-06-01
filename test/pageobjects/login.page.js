var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * 定義元素
     */
    username: { get: function () { return $('[name=email]') } },
    password: { get: function () { return $('[name=password]') } },
    submitButton:   { get: function () { return $('[type=submit]'); } },
    successMessage:   { get: function () { return $('[data-alert-type=info]'); } },
    failureMessage:   { get: function () { return $('[data-alert-type=danger]'); } },

    open: { value: function() {
        Page.open.call(this, 'keystone/signin');
    } },

    submit: { value: function() {
        this.submitButton.click();
    } }
});
module.exports = LoginPage;