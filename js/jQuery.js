$(document).ready(function () {
    'use strict';

    //Give The Small Width Size Scroller
    $('html').niceScroll();

    //Scroll Spy For Navbar
    $("body").scrollspy({
        target: "#main-nav"
    });

    // Add smooth scrolling
    $('#main-nav a').on('click', function (e) {
        // Check for a hash value
        if (this.hash !== '') {
            // Prevent default behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash to URL after scroll
                window.location.hash = hash;
            });
        }
    });

    //Shrink Navbar When Scrolling
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    //Height of Header Section
    $(".header").height($(window).height());

    //Welcome Intro Position
    $(".welcome").css("paddingTop", ($(window).height() - $(".welcome").height()) / 3.5);

    //Icon Scroll In Header To Scroll To Today Special Part
    $("#scroll-to-special").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#special").offset().top
        }, 1000);
    });

    ///Scroll Button Start
    $(".button-scroll").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".button-scroll").removeClass('remove');
        } else {
            $(".button-scroll").addClass('remove');
        }
    });
    ///Scroll Button End

    //Categories Part
    $(".food").on({
        mouseenter: function () {
            $(this).css({
                backgroundColor: "#85B72C",
                color: "#FFF",
                cursor: "pointer"
            });
            $(this).children().children("i").css({
                color: "#FFF"
            });
        },
        mouseleave: function () {
            $(this).css({
                backgroundColor: "#E6E6E6",
                color: "#000",
            });
            $(this).children().children("i").css({
                color: "#85B72C"
            });
        }

    });

    ///Start Data Changing With Respect To Categories
    $(".fast").click(function () {
        $(".burger").removeClass("remove");
        $(".burger").siblings().addClass("remove");
    });

    $(".grill").click(function () {
        $(".pasta").removeClass("remove");
        $(".pasta").siblings().addClass("remove");
    });

    $(".cookies").click(function () {
        $(".dessert").removeClass("remove");
        $(".dessert").siblings().addClass("remove");
    });

    $(".coffee").click(function () {
        $(".cafe").removeClass("remove");
        $(".cafe").siblings().addClass("remove");
    });
    ///End Data Changing With Respect To Categories

});