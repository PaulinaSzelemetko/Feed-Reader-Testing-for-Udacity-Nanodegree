
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
                 //This test that ensures the menu element is hidden by default.
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



    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
