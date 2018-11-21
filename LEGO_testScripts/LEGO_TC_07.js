var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for shop icon',function(){

                it('Pop up should appear after clicking on shop icon',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // Click on shop
                        landingPage.navigation("PRODUCTS");
                        browser.sleep(3000)

                        element(by.xpath('//*[@id="section-1"]/div/div[1]/div/div/div/ol/li[2]/span')).getText().then(function(confirmation){
                        console.log( ' confirmation text grabbed  :  ' + confirmation);
                        });

                        // TEST CASE DONE

                });

        })