var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for shop icon',function(){

                it('Pop up should appear after clicking on shop icon',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("SHOP");
                        browser.sleep(5000);
                    
                        // Confirm text message from the pop up
                        var popUp =  element(by.css(".l-xlink__header"));
                        popUp.getText().then(function(reference){
                        console.log(reference);

                        // Click on cross icon to close the pop up
                        element(by.xpath("//*[@id='l-modal']/div[2]/button")).click();
                        browser.sleep(5000);

                     })
                        
             })
                        
     });
        



