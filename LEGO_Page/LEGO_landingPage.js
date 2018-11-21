var util = require('util');
var landingPage = function(){

    

    // NAVIGATION 
    this.navigation = function(nav){

        if(nav == "LOGOICON"){
                 element(by.css('.l-logo__img')).click();
                }
            

        else if(nav == "SHOP"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[1]/a')).click();
                }
           

        else if(nav == "PRODUCTS"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[2]/a')).click();
                }
        

        else if(nav == "SUPPORT" ){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[3]/a')).click();
                }
        

        else if(nav == "GAMES"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[4]/a')).click();
                }
        

        else if(nav == "LEGOLIFE"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[5]/a')).click();
                }
        

        else if(nav == "VIDEOS"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[6]/a')).click();
                }

        else if(nav == "FORKIDS"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/nav/ul/li[7]/a')).click();
                }
        

        else if(nav == "SEARCH"){
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[1]/div/button')).click();
                }

        else if(nav == "ACCOUNT"){
                
                element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[2]/div/button/div[2]/div[1]')).click();
                }

        else if(nav == "FUNCTIONAL IMAGE1"){
                this.functionalImage1Click = function(){
                element(by.xpath('/html/body/div[1]/div/div/div/div[1]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "FORWARD ARROW ICON"){
                this.forwardArrowIconClick = function(){
                element(by.xpath('/html/body/div[1]/div/div/div/div[3]/button[2]/i')).click();
                }
        }

         else if(nav == "BACKWARD ARROW ICON"){
                this.backwardArrowIconClick = function(){
                element(by.xpath('/html/body/div[1]/div/div/div/div[3]/button[1]/i')).click();
                }
        }


        else if(nav == "EXPLORE"){
            this.exploreClick = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/div[1]/ul/li[1]/a/div/button/span[2]')).click();
                }
        }

        else if(nav == "DOT1"){
            this.dot1Click = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/ul/li[1]')).click();
                }
        }

        else if(nav == "DOT2"){
            this.dot2Click = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/ul/li[2]')).click();
                }
        }

        else if(nav == "DOT3"){
            this.dot3Click = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/ul/li[3]')).click();
                }
        }

        else if(nav == "DOT4"){
            this.dot4Click = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/ul/li[4]')).click();
                }
        }

        else if(nav == "DOT5"){
            this.dot5Click = function(){
            element(by.xpath('/html/body/div[1]/div/div/div/ul/li[5]')).click();
                }
        }

        else if(nav == "DEMO VIDEO"){
            this.demoVideoClick = function(){
            element(by.xpath('//*[@id="vjs_video_3"]/div[4]/button[1]')).click();
                }
        }

        else if(nav == "EXPLORE THUMBNAIL1"){
            this.exploreThumbnail1Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[2]/div/div/div/ul/li[1]/a/article')).click();
                }
        }

        else if(nav == "EXPLORE THUMBNAIL2"){
            this.exploreThumbnail2Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[2]/div/div/div/ul/li[2]')).click();
                }
        }

        else if(nav == "EXPLORE THUMBNAIL3"){
            this.exploreThumbnail3Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[2]/div/div/div/ul/li[3]')).click();
                }
        }

        else if(nav == "EXPLORE THUMBNAIL4"){
            this.exploreThumbnail4Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[2]/div/div/div/ul/li[4]')).click();
                }
        }

        else if(nav == "NEW SETS"){
            this.newSetsClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[1]/h2/a')).click();
                }
        }

        else if(nav == "NEW SETS SEE MORE"){
            this.newSetsSeeMoreClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[1]/a')).click();
                }
        }

        else if(nav == "FORWARD ARROW ICON"){
            this.forwardArrowIconClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/button[2]/i')).click();
                }
        }

        else if(nav == "NEW SETS THUMBNAIL1"){
            this.newSetsThumbnail1Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[1]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "NEW SETS THUMBNAIL2"){
            this.newSetsThumbnail2Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[2]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "NEW SETS THUMBNAIL3"){
            this.newSetsThumbnail3Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[3]/a/article/section[1]/div')).click();
                }
        }


        else if(nav == "NEW SETS THUMBNAIL4"){
            this.newSetsThumbnail4Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[4]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS"){
            this.trendingVideosClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[4]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS SEE MORE"){
            this.trendingVideosSeeMoreClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[3]/div/div/div/div[2]/div/ul/li[4]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS THUMBNAIL1"){
            this.trendingVideosThumbnail1Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[4]/div/div/div/div[2]/div/ul/li[1]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS THUMBNAIL2"){
            this.trendingVideosThumbnail2Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[4]/div/div/div/div[2]/div/ul/li[2]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS THUMBNAIL3"){
            this.trendingVideosThumbnail3Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[4]/div/div/div/div[2]/div/ul/li[3]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS THUMBNAIL4"){
            this.trendingVideosThumbnail4Click = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[4]/div/div/div/div[2]/div/ul/li[4]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "TRENDING VIDEOS FORWARD ARROW ICON"){
            this.trendingVideosForwardArrowIconClick = function(){
            element(by.xpath('//*[@id="section-1"]/div/div[4]/div/div/div/div[2]/button[2]/i')).click();
                }
        }

        else if(nav == "LEGO SHOP THUMBNAIL1"){
            this.legoShopThumbnail1Click = function(){
            element(by.xpath('//*[@id="section-3"]/div/div/div/div/div/ul/li[1]/a/article/section[1]')).click();
                }
        }

        else if(nav == "LEGO SHOP THUMBNAIL2"){
            this.legoShopThumbnail2Click = function(){
            element(by.xpath('//*[@id="section-3"]/div/div/div/div/div/ul/li[2]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "LEGO SHOP THUMBNAIL3"){
            this.legoShopThumbnail3Click = function(){
            element(by.xpath('//*[@id="section-3"]/div/div/div/div/div/ul/li[3]/a/article/section[1]/div')).click();
                }
        }

        else if(nav == "CUSTOMER SERVICE"){
            this.customerServiceClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "BUILDING INSTRUCTIONS"){
            this.vuildingInstructionsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[1]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "REPLACEMENT PARTS"){
            this.replacementPartsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[1]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "CONTACT US"){
            this.contactUsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[1]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "PRODUCT RECALLS"){
            this.productRecallsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[1]/ul/li[4]/a')).click();
                }
        }

        else if(nav == "ABOUT US"){
            this.aboutUsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "RESPONSIBILITY"){
            this.responsibilityClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "JOBS"){
            this.jobsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/ul/li[2]')).click();
                }
        }

        else if(nav == "LEGAL INFORMATION"){
            this.legalInformationClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/ul/li[3]')).click();
                }
        }

        else if(nav == "NEWSROOM"){
            this.newsroomClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/ul/li[4]')).click();
                }
        }

        else if(nav == "SUPPLY CHAIN TRANSPARENCY STATEMENT"){
            this.supplyChainTransparencyStatementClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[2]/ul/li[5]/a')).click();
                }
        }

        else if(nav == "PARENTS"){
            this.parentsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/a')).click();
                }
        }

        else if(nav == "BIRTHDAY PARTY IDEAS"){
            this.birthdayPartyIdeasClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "BUILDING IDEAS"){
            this.buildingIdeasClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "TOY CARS"){
            this.toyCarsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/ul/li[3]/a')).click();
                }
        }

        else if(nav == "CHILD DEVELOPMENT"){
            this.childDevelopmentClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/ul/li[4]/a')).click();
                }
        }

        else if(nav == "PLAY IDEAS"){
            this.playIdeasClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[3]/ul/li[5]/a')).click();
                }
        }

        else if(nav == "EDUCATORS"){
            this.educatorsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[4]/a')).click();
                }
        }

        
        else if(nav == "LEGO EDUCATION WEBSITE"){
            this.legoEducationWebsiteClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[4]/ul/li[1]/a')).click();
                }
        }

        else if(nav == "LEGO EDUCATION PRODUCTS"){
            this.legoEducationProductsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[4]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "ATTRACTIONS"){
            this.attractionsClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[5]/a')).click();
                }
        }

        else if(nav == "LEGO HOUSE"){
            this.legoHouseClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[5]/a')).click();
                }
        }

        else if(nav == "LEGOLAND PARKS"){
            this.legolandParks = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[5]/ul/li[2]/a')).click();
                }
        }

        else if(nav == "LEGOLAND DISCOVERY CENTERS"){
            this.legolandDiscoveryCentersClick = function(){
            element(by.xpath('//*[@id="l-gf"]/div[1]/ul/li[5]/ul/li[3]/a')).click();
                }
        }

    }

}


module.exports = new landingPage();