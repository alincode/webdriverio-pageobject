var Page = require('./page')
class LoginPage extends Page {
    get username()  { return $('[name=email]') }
    get password()  { return $('[name=password]') }
    get submitButton()  { return $('[type=submit]'); }
    
    open() {
        super.open('keystone/signin');
    }
    
    submit() {
        this.submitButton.click();
    }
    
}
module.exports = new LoginPage();