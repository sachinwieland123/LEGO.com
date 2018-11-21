
var landingPage = require('../LEGO_Page/LEGO_landingPage.js');

        describe('Testing for search functionality',function(){

                it('search results should be displayed based on searched keyword',function(){

                        //Open the url
                        browser.get("https://www.lego.com/en-us");

                        // handle pop up asking to answer few questions
                        var popUp = element(by.xpath('//*[@id="IPEinvL124035"]'));
                        expect(popUp).isPresent(true).then(function(){
                        if(popUp = true){
                        element(by.xpath('//*[@id="IPEinvL124035"]/map/area[2]')).click();
                        }
                        });

                        element(by.xpath('//*[@id="l-sticky-gf"]/div/button')).click();
                        

                        // Click on shop
                        landingPage.navigation("ACCOUNT");
                        browser.sleep(1000);
                        element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[2]/div/div/ul/li[3]/a')).click();
                        browser.sleep(3000);

                         browser.waitForAngularEnabled(false);

                         // Enter the email address
                         element(by.xpath('//*[@id="email"]')).sendKeys('amigospro3@gmail.com');      
                         
                         // Enter the Password
                         element(by.xpath('//*[@id="password"]')).sendKeys('Amigospro3@123');

                         // Confirm the passsword
                         element(by.xpath('//*[@id="password2"]')).sendKeys('Amigospro3@123');
                         

                         // Select month from the dropdown
                         element(by.xpath('//*[@id="signup-step1"]/div[2]/form/div[4]/div/div[1]')).click();
                         browser.sleep(500)
                         element(by.xpath('//*[@id="month"]/option[4]')).click();

                         // Select Day
                         element(by.xpath('//*[@id="day"]')).click();
                         browser.sleep(500)
                         element(by.xpath('//*[@id="day"]/option[31]')).click();
                         
                         // Select Year
                         element(by.xpath('//*[@id="year"]')).click();
                         browser.sleep(500)
                         element(by.xpath('//*[@id="year"]/option[28]')).click();
                         
                        // Select Country
                        element(by.xpath('//*[@id="year"]')).click();
                        browser.sleep(500)
                        element(by.xpath('//*[@id="country"]/option[101]')).click();
                     

                        browser.executeScript('window.scrollTo(0,5000);').then(function () {
                        console.log('++++++SCROLLED Down+++++');
                        });


                        // Check the box
                        element(by.xpath('//*[@id="enusXX01"]')).click();

                        // Click on sign up
                        element(by.xpath('//*[@id="signup-step1"]/div[2]/form/div[7]/button')).click();

                        browser.sleep(2000)

                        element(by.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/h1')).getText().then(function(confirmation){
                        console.log( 'Successfully navigated to the next page and asking to ' +  confirmation);
                        });

                      

             });


    });
                                            
                
        

                       
 