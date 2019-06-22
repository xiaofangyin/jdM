window.onload = function (ev) {

    search();

    banner();

    countDown();
};

var search = function () {
    var search = document.querySelector(".jd_search_box");
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;

    window.onscroll = function (ev) {
        // var scrollTop = document.body.scrollTop;
        // var scrollTop = document.documentElement.scrollTop;
        var scrollTop = window.pageYOffset;
        var opacity = 0;
        if (scrollTop < bannerHeight) {
            opacity = scrollTop / bannerHeight * 0.85;
        } else {
            opacity = 0.85;
        }
        search.style.backgroundColor = "rgba(201,21,35," + opacity + ")";
        console.log(scrollTop, opacity);
    };
};

var banner = function () {

};

var countDown = function () {

};