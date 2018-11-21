var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for shop icon',function(){

                it('Pop up should appear after clicking on shop icon',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("SHOP");
                        browser.sleep(3000)
                    
                        // Confirm text message from the pop up
                        var popUp =  element(by.css(".l-xlink__header"));
                        popUp.getText().then(function(reference){
                        console.log(reference);
                        });

                        // Click outside the popup 
                        browser.actions().
                        mouseMove({x: 50, y: 0}).
                        click().
                        perform();
                        browser.sleep(5000)

                        // TEST CASE DONE
                });
        });            