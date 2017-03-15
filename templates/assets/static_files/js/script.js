//@font-face {
//    font-family: "CirceRegular";
//    src: url("../../assets/fonts/Circe-Regular.eot");
//    src: url("../../assets/fonts/Circe-Regular.eot?#iefix")format("embedded-opentype"),
//        url("../../assets/fonts/Circe-Regular.woff") format("woff"),
//        url("../../assets/fonts/Circe-Regular.ttf") format("truetype");
//    font-style: normal;
//    font-weight: normal;
//}
//
//@font-face {
//    font-family: "CirceBold";
//    src: url("../../assets/fonts/Circe-Bold.eot");
//    src: url("../../assets/fonts/Circe-Bold.eot?#iefix")format("embedded-opentype"),
//        url("../../assets/fonts/Circe-Bold.woff") format("woff"),
//        url("../../assets/fonts/Circe-Bold.ttf") format("truetype");
//    font-style: normal;
//    font-weight: bold;
//}


(function () {

    $('ul.menu > li > a[href^="#"], .main[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });


    $('.menu > li:first-child a').addClass('active');
    $('.menu > li > a').on('click', function (event) {
        event.preventDefault();
        $('.menu > li a').removeClass('active');
        $(this).addClass('active');
    });


    $('.tabs-stage > div, .tabs-block > div').hide();
    $('.tabs-stage > div:nth-child(1), .tabs-block > div:nth-child(1)').show();
    $('.tabs-nav > li:first-child p, .tabs-button > li:first-child p').addClass('tab_active');

    // �������� ����� ������� � ���������� ����������
    $('.tabs-nav > li > a').on('click', function (event) {
        event.preventDefault();
        $('.tabs-nav > li p').removeClass('tab_active');
        $(this).children('p').addClass('tab_active');
        $('.tabs-stage > div').hide(500);
        $($(this).attr('href')).show(500);
    });

    $('.tabs-button > li > a').on('click', function (event) {
        event.preventDefault();
        $('.tabs-button > li p').removeClass('tab_active');
        $(this).children('p').addClass('tab_active');
        $('.tabs-block > div').hide(500);
        $($(this).attr('href')).show(500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 77) {
            $('header').addClass('fixed_header');
        }
        else {
            $('header').removeClass('fixed_header');
        }
    });

    $('.slider').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        variableHeight: true,
        arrows: false,
        dots: true,
        draggable: false
        //responsive: [
        //    {
        //        breakpoint: 768,
        //        settings: {
        //            arrows: false,
        //            centerMode: true,
        //            centerPadding: '40px',
        //            slidesToShow: 3
        //        }
        //    },
        //    {
        //        breakpoint: 480,
        //        settings: {
        //            arrows: false,
        //            centerMode: true,
        //            centerPadding: '40px',
        //            slidesToShow: 1
        //        }
        //    }
        //]
    });

    $('.v_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.v_slider_nav'
    });


    $('.v_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.v_slider',
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: '0px'
    });


})();

function Show1() {
    //event.preventDefault();
    $('.parquet_details > .dot').removeClass('active_dot');
    $(this).addClass('active_dot');
    var line = $('.line');
    var text = $('.description > p');
    line.css('display', 'none');
    text.css('display', 'none');
    $('.d_title p').css('display', 'none');
    $('.line1').fadeIn(1000);
    $('.load_title1').css('display', 'inline-block');
    $('.load_text1').slideDown(1300);
}

function Show2() {
    //event.preventDefault();
    $('.parquet_details > .dot').removeClass('active_dot');
    $(this).addClass('active_dot');
    var line = $('.line');
    var text = $('.description > p');
    line.css('display', 'none');
    text.css('display', 'none');
    $('.d_title p').css('display', 'none');
    $('.line2').fadeIn(1000);
    $('.load_title2').css('display', 'inline-block');
    $('.load_text2').slideDown(1300);
}

function Show3() {
    //event.preventDefault();
    $('.parquet_details > .dot').removeClass('active_dot');
    $(this).addClass('active_dot');
    var line = $('.line');
    var text = $('.description > p');
    line.css('display', 'none');
    text.css('display', 'none');
    $('.d_title p').css('display', 'none');
    $('.line3').fadeIn(1000);
    $('.load_title3').css('display', 'inline-block');
    $('.load_text3').slideDown(1300);
}

function Show4() {
    //event.preventDefault();
    $('.parquet_details > .dot').removeClass('active_dot');
    $(this).addClass('active_dot');
    var line = $('.line');
    var text = $('.description > p');
    line.css('display', 'none');
    text.css('display', 'none');
    $('.d_title p').css('display', 'none');
    $('.line4').fadeIn(1000);
    $('.load_title4').css('display', 'inline-block');
    $('.load_text4').slideDown(1300);
}

$(document).ready(function () {
    $('.dot1').on('click', Show1);
    $('.dot2').on('click', Show2);
    $('.dot3').on('click', Show3);
    $('.dot4').on('click', Show4);

    $(function () {
        //----- OPEN
        $('[data-popup-open]').on('click', function (e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

            e.preventDefault();
        });


        //----- CLOSE
        $('[data-popup-close]').on('click', function (e) {

            e.preventDefault();
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        });

        $(".item").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
});
