describe('Demo project', function () {

    it('Addition', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('51');
        element(by.css('[ng-click="doAddition()"]')).click();

<<<<<<< HEAD
        browser.sleep(2000);
=======
        browser.sleep(4000);
>>>>>>> 096479a5f88740b1caf8e978a39d253b6ec60415

    });


    it('subtraction', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('51');


        var select = element(by.model('operator'));
        select.$('[value="SUBTRACTION"]').click();
        // element.all(by.options('SUBTRACTION')).click();


        element(by.model('second')).sendKeys('5');
        element(by.css('[ng-click="doAddition()"]')).click();

        browser.sleep(3000);

    });
});