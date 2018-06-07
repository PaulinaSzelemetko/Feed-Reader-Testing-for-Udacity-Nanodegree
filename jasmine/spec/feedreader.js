
$(function() {
       
    describe('RSS Feeds', function() {
        //This function ensures that allFeeds is defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    });

    describe('URLs and names in allFeeds are defined', function(){
        //This function loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        allFeeds.forEach(function(feed){
            it('has an url', function(){
                expect(feed.url).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
            //This function ensures feed has a name defined and that the name is not empty
            it('has a name', function(){
                expect(feed.name).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
        });
    });


    describe('Menu', function(){
             //This test ensures the menu element is hidden by default.
            it('is hidden by default', function(){
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
            //This test ensures the menu element is hidden / display when clicking.
            it('is display and hidden when clicking', function(){
                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
    });

    describe('Initial entries', function(){

        let entries = document.getElementsByClassName('entry-link').length;
        //This function loads feed before the actual test is run. It uses Jasmine done function.
        beforeEach(function (done){
            loadFeed(0, function() {
                done();
            });
        });
        //This test ensures that when the loadFeed function is called and completes its work,ther is at least one .entry element
        it('has at least one entry element in the feed', function (done){
            expect(entries.length).not.toBe(0);
            done();
        }); 
    });

    describe('New Feed Selection', function(){
        let feedBefore;
        let feedAfter;
        let entries = document.getElementsByClassName('entry-link')[0];

        //This function loads the feed twice with different parameter and stores feeds content into variable after each load.
        beforeEach(function (done){
            loadFeed(0, function() {
                feedBefore = $('.feed').html();
                loadFeed(1, function() {
                    feedAfter =$('.feed').html();
                    done();
                })
            });
         
        });
       
        //This test ensures that when the loadFeed is run twice with different parameters the conents of the feed change.
        it('feed element changes when loadFeed is run', function(done) {
            expect(feedBefore).not.toBe(feedAfter);
            done();
        });
    });
}());
