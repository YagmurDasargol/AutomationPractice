var openAutomation = {
    //xpathler
    signinButton:'//*[@id="header"]/div[2]/div/div/nav/div[1]/a',
    emailBox:'//*[@id="email"]',
    passwordBox:'//*[@id="passwd"]',
    signinUserButton:'//*[@id="SubmitLogin"]',
    verifyError:'//*[@id="center_column"]/div[1]/ol/li',
    verifyPasswordError:'//*[@id="center_column"]/div[1]/p',
    verifyEmailError:'//*[@id="center_column"]/div[1]/ol/li',
    verifyWrongCredentials: '//*[@id="center_column"]/div[1]/ol/li'
    }
/*
var registration = {
//xpathler
    accountButton:'//*[@id="SubmitCreate"]',
    accountEmail:'//*[@id="email_create"]'
}*/

    module.exports = {
        openAutomation: openAutomation /*,
        registration: registration*/
    }