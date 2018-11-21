
var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

describe('Click on login image',function(){
    
 

    it('It should load and user should be on the same page',function(){


                    // Open the url
                    browser.get("https://www.lego.com/en-us");

                    // Click on LEGO icon
                    landingPage.navigation("LOGOICON")

                    // Verify successfull loading of page and user remains on the same page
                    browser.getCurrentUrl().then(function(currentUrl){
                    console.log('Successfull loading of page : ' + currentUrl);
                    expect(currentUrl).toEqual("https://www.lego.com/en-us");

                    // TEST CASE DONE

                });
     
         });

       
 });
    
