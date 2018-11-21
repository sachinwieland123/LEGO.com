var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for shop icon',function(){

                it('Pop up should appear after clicking on shop icon',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("GAMES");
                        browser.sleep(3000)
                       

                        // Confirmation
                        browser.getCurrentUrl().then(function(URL){
                        console.log( 'Confirmation  :  ' + URL);

                        //})TEST CASE DONE

                        });

                 });
                                            
                
         });

                       
 