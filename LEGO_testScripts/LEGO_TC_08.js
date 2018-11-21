var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for shop icon',function(){

                it('Pop up should appear after clicking on shop icon',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("SUPPORT");
                        browser.sleep(1000)
                       

                        // Confirmation
                        browser.getCurrentUrl().then(function(URL){
                        console.log( 'Confirmation  :  ' + URL);

                        
                        var text = element(by.xpath('/html/body/div[1]/div/div/div/h1')).getText();
                        text.then(function(supportText){
                        console.log(supportText);

                        //})TEST CASE DONE

                        });

                 });
                                            
                
         });

                       
 });