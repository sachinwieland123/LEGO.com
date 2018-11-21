// 

var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for search functionality',function(){

                it('search results should be displayed based on searched keyword',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("ACCOUNT");
                        element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[1]/div/form/input[1]')).sendKeys('Winter Village Fire Station');
                        element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[1]/div/form/button')).click();
                        browser.sleep(5000);
                       

                        // Confirmation
                        browser.waitForAngularEnabled(false);
                        browser.getCurrentUrl().then(function(URL){
                        console.log( 'Confirmation  :  ' + URL);
                        
                        //})TEST CASE DONE

                        });

                 });
                                            
                
         });

                       
 