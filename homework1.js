function checkURL() {

    //get the url by removing the hash
    var url = location.hash.replace(/^#/, '');//1-проверить url на входе

    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
        // remove all active class
        $('nav li.active').removeClass("active");
        // match the url and add the active class
        $('nav li:has(a[href="' + url + '"])').addClass("active");
        var title = ($('nav a[href="' + url + '"]').attr('title'))//2-проверить получаемый title

        // change page title from global var
        document.title = (title || document.title);//3-проверить получаемый document.title
        //console.log("page title: " + document.title);

        // parse url to jquery
        loadURL(url + location.search, container);//4-проверить loadURL
    } else {

        // grab the first URL from nav
        var $this = $('nav > ul > li:first-child > a[href!="#"]');

        //update hash
        window.location.hash = $this.attr('href');//5-проверить получаемый window.location.hash

    }
//можно передавать переменную container в ф-ию checkURL
// Можно определеть ф-цию выше по тексту getContainer()
}