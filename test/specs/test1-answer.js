// 斷言函式庫
var assert = require('assert');
var LoginPage = require('../pageobjects/login.page');
var DashBoardPage = require('../pageobjects/dashboard.page');

describe('demo2', function() {

  beforeEach(function() {
    // browser.pause(8000);
  });

  it('登入失敗', function() {
    LoginPage.open();
    LoginPage.username.setValue('demo@keystonejs.com');
    LoginPage.password.setValue('1111');
    LoginPage.submit();
    LoginPage.failureMessage.waitForExist();
  });

  it('登入成功', function() {
    LoginPage.open();
    LoginPage.username.setValue('demo@keystonejs.com');
    LoginPage.password.setValue('demo');
    LoginPage.submit();
    DashBoardPage.logoutLink.waitForExist();
  });

  it('登出', function() {
    DashBoardPage.logoutLink.click();
    LoginPage.successMessage.waitForExist();
  });

});