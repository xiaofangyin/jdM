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
    };
};

var banner = function () {
    var banner = document.querySelector(".jd_banner");
    var width = banner.offsetWidth;
    var imageBox = banner.querySelector("ul:first-child");
    var indicator = banner.querySelector("ul:last-child");

    var index = 1;
    var timmer = setInterval(function () {
        index++;
        /*加过度*/
        imageBox.style.transition = "all 0.2s";
        imageBox.style.webkitTransform = "all 0.2s";

        /*做动画*/
        imageBox.style.transform = "translateX(" + (-width * index) + "px)";
        imageBox.style.webkitTransform = "translateX(" + (-width * index) + "px)";
    }, 3000);
};

var countDown = function () {

};