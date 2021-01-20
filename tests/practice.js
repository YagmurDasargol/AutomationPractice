function TestController(){
	var date = new Date();
	var dateStamp = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()+'_'+date.getHours()+'.'+date.getMinutes();
	var folderName = 'reports'	
		this.switchWindow = function(browser, windowIndex){ //windowIndex starts from 0
				browser.windowHandles(function(result){
					this.switchWindow(result.value[windowIndex]);
				});	
				return browser;
    };

    this.openAutomation = function(browser){
			browser	
			.useXpath()
			.url('http://automationpractice.com/')
			// scenario0- open the automation practice page successfully
			.pause(2000)
			.saveScreenshot(folderName+dateStamp+'Flow_OpenAutomationPractice-Success.png')

			// scenario1- Sign in with no credentials. Ensure the correct error message is displayed
			.click(browser.globals.openAutomation.signinButton)
			.pause(5000)
			.saveScreenshot(folderName+dateStamp+'Flow_NavigateAuthenticationPage-Success.png')
			.click(browser.globals.openAutomation.signinUserButton)
			.pause(5000)
			.verify.visible(browser.globals.openAutomation.verifyError)
			.saveScreenshot(folderName+dateStamp+'Flow_SigninwithNoCredentials-Success.png')

			// scenario2- Sign in with email and empty password. Ensure the correct error message is displayed.
			.setValue(browser.globals.openAutomation.emailBox, 'y@dasargol.com')
			.setValue(browser.globals.openAutomation.passwordBox, '')
			.click(browser.globals.openAutomation.signinUserButton)
			.verify.visible(browser.globals.openAutomation.verifyPasswordError)
			.pause(5000)
			.saveScreenshot(folderName+dateStamp+'Flow_SigninWithEmail&emptyPassword-Success.png')

			// scenario3- Sign in with password and empty email. Ensure the correct error message is displayed.
			.clearValue(browser.globals.openAutomation.emailBox)
			.pause(250)
			.setValue(browser.globals.openAutomation.emailBox, '')
			.setValue(browser.globals.openAutomation.passwordBox, '1234')
			.click(browser.globals.openAutomation.signinUserButton)
			.verify.visible(browser.globals.openAutomation.verifyEmailError)
			.pause(5000)
			.saveScreenshot(folderName+dateStamp+'Flow_SigninWithPassword&EmptyEmail-Success.png')

			// scenario4. Sign in with incorrect credentials. Ensure the correct error message is displayed.
			.clearValue(browser.globals.openAutomation.emailBox)
			.clearValue(browser.globals.openAutomation.passwordBox)
			.pause(250)
			.setValue(browser.globals.openAutomation.emailBox, '12r')
			.setValue(browser.globals.openAutomation.passwordBox, '12344')
			.click(browser.globals.openAutomation.signinUserButton)
			.verify.visible(browser.globals.openAutomation.verifyWrongCredentials)
			.pause(5000)
			.saveScreenshot(folderName+dateStamp+'Flow_SigninWithWrongPassword&Email-Success.png')
		}
		/*
		this.registration = function(browser){
			browser
			testController.switchWindow(browser, 1)
			.frame('iframe1')
			.useXpath()
			.waitForElementVisible(browser.globals.registration.accountButton, 25000)
			.setValue(browser.globals.registration.accountEmail, 'yagmur@dasargol.com')
			.click(browser.globals.registration.accountButton)
			.pause(1000)
			
		}*/

        };


        var testController = new TestController();
      
          module.exports = {
				  '1- Opening AutomationPractice page & SigninCredentialsCheck...' : testController.openAutomation
				  /*,
                  '2- Opening Registration Page..' : testController.registration*/
              };