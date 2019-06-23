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

    /*加过度*/
    var addTransition = function () {
        imageBox.style.transition = "all 0.2s";
        imageBox.style.webkitTransform = "all 0.2s";
    };

    /*移除过度*/
    var removeTransition = function () {
        imageBox.style.transition = "none";
        imageBox.style.webkitTransform = "none";
    };

    /*做位移*/
    var translateX = function (x) {
        imageBox.style.transform = "translateX(" + x + "px)";
        imageBox.style.webkitTransform = "translateX(" + x + "px)";
    };

    var index = 1;
    var timmer = setInterval(function () {
        index++;

        addTransition()
        translateX(-width * index);
    }, 3000);

    imageBox.addEventListener("transitionend", function (evt) {
        if (index >= 9) {
            index = 1;
            removeTransition();
            translateX(-width * index);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            translateX(-width * index);
        }

        console.log("index: " + index);
    })
};

var countDown = function () {

};