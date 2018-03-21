$(document).ready(function() {

    //меню в мобильной версии
    $('.mobile-menu').on('click', function (ev) {
        ev.preventDefault;

        if(!$(".menu_wrapper").hasClass('active')) {
            $(".menu_wrapper").addClass('active'),
            $('.menu_wrapper').animate({height: 356}, 500),
            $('.page_top').css("height", "1089px");
        }

        else {
            $(".menu_wrapper").removeClass('active');
            $('.menu_wrapper').animate({height: 90,}, 500),
            $('.page_top').css("height", "823px");
        }
    });

    //подменю в мобильной версии
    $(".top_menu__item").on('click', function (ev) {
    ev.preventDefault;

    if ($(window).width() < 564) {
        var element = $(ev.target),
        content = element.closest(".inside_menu"),
        verItem = element.closest('.top_menu__item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.inside_menu__wrap'),
        verContents = verItems.find('.inside_menu__wrap'),
        maxHeight = verItem.find('.inside_menu').outerHeight(true);
        
        if(!verItem.hasClass('active')) {
            verItems.removeClass('active');
            verItem.addClass('active');

            verContents.css ('height', 0),
            verContent.css('height', maxHeight); 
         
            $('.menu_wrapper').animate({height: 532}, 500),
            $('.page_top').css("height", "1265px");

        } else {
            verItem.removeClass('active');
            verContent.css ('height', 0),
            $('.menu_wrapper').animate({height: 356}, 500),
            $('.page_top').css('height', '1089px');     
        } 
    } 
});

    $(window).resize(function() {
        if ($(window).width() > 563 && $(window).width() < 870) {
            $('.page_top').css("height", "853px");
            $('.menu_wrapper').css('height', '90px');
            $(".menu_wrapper").removeClass('active');
        }
        if ($(window).width() >= 890) { 
            $('.page_top').css("height", "913px");
        }
        if ($(window).width() <= 563) {
            $('.page_top').css("height", "823px");
        }
    });
});


