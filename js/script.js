$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 10) {
            $(".header")
                .removeClass("header--scroll")
                .addClass("header--scroll");
        }
    });

    if (screen.width > 768) {
        $("#fullpage").fullpage({
            autoScrolling: true,
            anchors: ["firstPage", "secondPage", "thirdPage"],
            scrollHorizontally: false,
            verticalCentered: false,
            menu: "#myMenu",
            css3: true,
            afterSlideLoad: function (
                anchorLink,
                index,
                slideAnchor,
                slideIndex
            ) {
                $("#myMenu li.active").removeClass("active");
                $("#myMenu li").eq(slideIndex).addClass("active");
            },
        });
    }

    $(".tab__list li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $(".tab__list li").removeClass("active");
        $(".tab__content").removeClass("active");

        $(this).addClass("active");
        $("#" + tab_id).addClass("active");
    });
    $("select").selectric();

    //stars
    $(function () {
        var body = $(".main"),
            template = $(".template.shine"),
            stars = 30,
            sparkle = 10;

        var size = "small";
        var createStar = function () {
            template
                .clone()
                .css({
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    webkitAnimationDelay: Math.random() * sparkle + "s",
                    mozAnimationDelay: Math.random() * sparkle + "s",
                })
                .addClass(size)
                .appendTo(body);
        };

        for (var i = 0; i < stars; i++) {
            if (i % 2 === 0) {
                size = "small";
            } else if (i % 3 === 0) {
                size = "medium";
            } else {
                size = "large";
            }

            createStar();
        }
    });
    // snow

    for (let i = 0; i < 50; i++) {
        var snow = "<span class='snow'></span>";
        $("body").append(snow);
        setTimeout(function () {
            jQuery(snow).remove();
        }, 5000);
    }

    //comment
    if (screen.width > 992) {
        setTimeout(function () {
            var body = $(".bg--santa"),
                messageText = "How how how !!! Like it? Scroll down for more !",
                messageTag =
                    "<span class='message__text'>" + messageText + "</span>",
                messageBlock = "<div class='message'>" + messageTag + "</div>";

            $(body).append(messageBlock);
        }, 3000);
    }
});
