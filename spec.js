// spec.js
describe('Login Test', function() {
    browser.ignoreSynchronization = true;

    it('Page Title should be ClickDOC', function() {
        browser.get(browser.baseUrl);
        expect(browser.getTitle()).toEqual('CLICKDOC');
        //console.log(browser.getTitle());
        });

    it('Move to Profile Section', function () {
        element(by.xpath("/html/body/header/div[1]/nav/div[2]/ul/li[8]/a")).click();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.driver.sleep(5000);
        browser.waitForAngular();
        browser.driver.sleep(5000);

        });

    it('Login Screen Appear', function(){

        browser.switchTo().frame(element(by.id('iframeDialog')).getWebElement());
        browser.driver.sleep(5000);
        expect(element(by.className('login content-container')).isPresent()).toBeTruthy();

        // var loginScreen =  element(by.className('login content-container'));
        // loginScreen.isPresent().then(function(result) {
        //     if (result) {
        //         console.log('Login screen appears');
        //         } else {
        //         //do nothing
        //         console.log('Login screen not found');
        //         }
        //     });
       // });



    });

    it('Verify Login Screen should appear', function(){

        //browser.switchTo().frame(element(by.id('iframeDialog')).getWebElement());
        expect(element(by.xpath("/html/body/app-root/div/div/main/app-login/div/div[1]/div/div/div[2]/div[1]/form/mat-form-field[1]/div/div[1]/div/input")).isPresent()).toBeTruthy();
        browser.driver.sleep(5000);

            });

    it('Verify Elements on Login Screen', function(){

      browser.switchTo().frame(element(by.id('iframeDialog')).getWebElement());
        // expect(element(by.id("mat-input-0")).isPresent()).toBeTruthy();
        // expect(element(by.id("mat-input-1")).isPresent()).toBeTruthy();
         element(by.id(iframeDialog)).close();
        //element('dog'));

            // var iframe = document(element(by.id('iframeDialog')));
            // var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
            // console.log(innerDoc.body);

    });


});
