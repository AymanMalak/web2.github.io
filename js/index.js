$(document).ready(function () {

    if (($(window).width()) < 900) {
        $('button.navbar-toggler').css({ 'border': '2px solid #aaa' })
        $('span.navbar-toggler-icon').css({ 'color': '#fff', 'font-size': '1.5rem', 'background-color': 'transparent' })
        $('nav.navbar').css({ 'background-color': 'transparent' })
    }
    $('button.navbar-toggler').click(function () {
        $('nav.navbar .row ul').css({ 'display': 'flex', 'flex-direction': 'row', 'flex-wrap': 'wrap', 'justify-content': 'center', 'color': 'red' })
        // $('nav.navbar ul').()
    })
    // ----------------------------------------------------------------------------------
    $("#navigation li a").mPageScroll2id({
        scrollSpeed: 900
    });
    var breakpoint = 840;
    // ----------------------------------------------------------------------------------
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        rtl: false,
        nav: true,
        dots: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInY',
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        stagePadding: 4,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });
    // ----------------------------------------------------------------------------------
    $(function () {
        $('.count-num').rCounter({
            // number: 100,
            duration: 50
        });
    });
    // ----------------------------------------------------------------------------------
    $("body").toTopButton({

        // path to icons
        // imagePath: '../img/icons/b/arrow.svg',

        // arrow, arrow-circle, caret, caret-circle, circle, circle-o, arrow-l, drop, rise, top
        // or your own SVG icon
        arrowType: 'rise',

        // 'w' = white
        // 'b' = black
        iconColor: 'w',

        // icon shadow
        // from 1 to 16
        iconShadow: 4,

        // opacity from 0 to 20
        opacity: 15,

        // border radious from 0-10 (0-50%)
        shape: 10,

        // from 0-10 (0-100px)
        margin: 3,

        // background color
        backgroundColor: '#09c',

        // border options
        border: {
            width: 0,
            color: 'black'
        },

        // 'tl': top-left
        // 'tr': top-right
        // 'bl': bottom-left
        // 'br': bottom-right.
        position: 'br',

        // button size from 1-6 (30-80px)
        size: 4,

        // button shadow from 1-5
        btnShadow: 2,

        // uses CSS filter
        filter: true,

        // classes for the link
        linkClasses: [],

        // classes for the image
        // imgClasses: ['imges'],

        // scroll position to show the button
        scrollTrigger: 200,

        // animation speed for smooth scroll
        animationTime: 1000,

        // fade in/out speed
        fadeInSpeed: 'slow',
        fadeOutSpeed: 'slow',

        // auto hides when the screen size is smaller than this value
        mobileHide: 100,

        // auto hides when reaching the top
        autoHide: true,

    });
    // ----------------------------------------------------------------------------------
    AOS.init();
    // ----------------------------------------------------------------------------------
    $('.magic').magicWand({
        'animation': 'color',
        'color': 'green'
    });
    $('.magic2').magicWand({
        'animation': 'color',
        'color': 'green'
    });
    $('.magic1').magicWand({
        'animation': 'color',
        'color': 'red'
    });
    $('.magic3').magicWand({
        'animation': 'color',
        'color': 'blue'
    });
    // ----------------------------------------------------------------------------------

    $(".num1").numScroll({
        number: 260,
        'time': 4500,
        'delay': 0,
        'symbol': true,
        'fromZero': true
    });
    $(".num2").numScroll({
        number: 120,
        'time': 4500,
        'delay': 0,
        'symbol': true,
        'fromZero': true
    });
    $(".num3").numScroll({
        number: 260,
        'time': 4500,
        'delay': 200,
        'symbol': true,
        'fromZero': true
    });
    // ----------------------------------------------------------------------------------
});

