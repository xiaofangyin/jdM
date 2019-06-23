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
    var points = indicator.querySelectorAll("li");

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
    var setTranslateX = function (x) {
        imageBox.style.transform = "translateX(" + x + "px)";
        imageBox.style.webkitTransform = "translateX(" + x + "px)";
    };

    var index = 1;
    var timmer = setInterval(function () {
        index++;

        addTransition();
        setTranslateX(-width * index);
    }, 3000);

    imageBox.addEventListener("transitionend", function (evt) {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-width * index);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-width * index);
        }

        setPoint();
    });

    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            var obj = points[i];
            obj.classList.remove("now");
        }
        points[index - 1].classList.add("now");
    };

    var startX = 0;
    /*绑定事件*/
    imageBox.addEventListener("touchstart", function (evt) {
        console.log("touch start...");

        clearInterval(timmer);
        startX = evt.touches[0].clientX;
    });

    imageBox.addEventListener("touchmove", function (evt) {
        console.log("touch move...");

        var moveX = evt.touches[0].clientX;
        var dis = moveX - startX;
        var translateX = -index * width + dis;
        removeTransition();
        setTranslateX(translateX);
    });

    imageBox.addEventListener("touchend", function (evt) {
        console.log("touch end...");

    });
};

var countDown = function () {
    var time = 2 * 60 * 60;
    var spans = document.querySelector(".time").querySelectorAll("span");

    var timer = setInterval(function () {
        time--;
        var hour = Math.floor(time / 3600);
        var minute = Math.floor(time % 3600 / 60);
        var second = time % 60;

        spans[0].innerHTML = String(Math.floor(hour / 10));
        spans[1].innerHTML = String(hour % 10);

        spans[3].innerHTML = String(Math.floor(minute / 10));
        spans[4].innerHTML = String(minute % 10);

        spans[6].innerHTML = String(Math.floor(second / 10));
        spans[7].innerHTML = String(second % 10);

        if (time <= 0) {
            clearInterval(timer);
        }
        console.log("time: " + time);
    }, 1000);
};