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

                        // Click on continue button to close the pop up
                        
                        element(by.xpath("//*[@id='l-modal']/div[2]/div/div/div[2]/a")).click();
                        //browser.sleep(5000);

                        // Confirmation successfull navigation to shop page
                        browser.waitForAngularEnabled(false);
                        element(by.xpath('//*[@id="headerFixed"]/div[2]/div/nav[2]/a/span/span')).getText().then(function(text){
                        console.log( " Proof of navigation : " + text);

                        });
              
              
                });
                        
                        
     });
                    
       
