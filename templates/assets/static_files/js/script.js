(function () {

    var dot = documentgetElementByClassesN

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

$(document).ready(function () {
    $('.menu > li:first-child a').addClass('active');
    $('.menu > li > a').on('click', function (event) {
        event.preventDefault();
        $('.menu > li a').removeClass('active');
        $(this).addClass('active');
    });


    $('.tabs-stage > div, .tabs-block > div').hide();
    $('.tabs-stage > div:nth-child(1), .tabs-block > div:nth-child(1)').show();
    $('.tabs-nav > li:first-child p, .tabs-button > li:first-child p').addClass('tab_active');

    // »зменить класс вкладки и отобразить содержимое
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

});
