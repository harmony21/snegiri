$(document).ready(function() {

    if ($(window).width() < 564) {
        $('.top_menu').css("top", "211px");
    }

    //меню в мобильной версии
    $('.mobile-menu').on('click', function (ev) {
        ev.preventDefault;

        if ($(window).width() < 564) {

            if (!$(".menu_wrapper").hasClass('active')) {
                $('.menu_wrapper').animate({height: 356}, 400),
                $('.page_top').animate({height: 831,}, 400);
                setTimeout(function() {
                    $(".menu_wrapper").addClass('active');
                }, 300);   
            }
            else {
                $(".menu_wrapper").removeClass('active');
                $('.menu_wrapper').animate({height: 90,}, 400),
                $('.page_top').animate({height: 565,}, 400),
                $('.top_menu__item').removeClass('active');
                $('.top_menu__item').find('.inside_menu__wrap').css("height", "0");
            }  
        }    
    });

    //подменю в мобильной версии
    $(".inside").on('click', function (ev) {
        ev.preventDefault;

        if ($(window).width() < 564) {
            var element = $(ev.target),
            verItem = element.closest('.top_menu__item'),
            verItems = verItem.siblings(),
            verContent = verItem.find('.inside_menu__wrap'),
            verContents = verItems.find('.inside_menu__wrap'),
            maxHeight = verItem.find('.inside_menu').outerHeight(true);

                if(!verItem.hasClass('active')) {
                    verItems.removeClass('active');
                    verContent.animate({height: maxHeight}, 400);
                    verContents.animate({height: 0}, 400);
                    setTimeout(function() {
                        verItem.addClass('active');
                    }, 300);  
                    $('.menu_wrapper').animate({height: 532}, 400);
                    $('.page_top').css("height", "1007px");
                } 
                else {
                    verItem.removeClass('active'); 
                    verContent.animate({height: 0}, 400);
                    $('.menu_wrapper').animate({height: 356}, 400);
                    $('.page_top').css('height', '831px');     
                }     
            } 
        });
    });

$(window).resize(function() {
        if ($(window).width() > 563 && $(window).width() < 870) {
            $('.page_top').css("height", "853px");
            $('.menu_wrapper').css('height', '90px');
            $(".menu_wrapper").removeClass('active');
        }
        if ($(window).width() >= 890) { 
            $('.page_top').css("height", "913px");
            $('.menu_wrapper').css('height', '90px');
            $(".top_menu__item").removeClass('active');
        }
        if ($(window).width() <= 563) {
            $('.page_top').css("height", "565px");
            $(".menu_wrapper").removeClass('active');
            $(".top_menu__item").removeClass('active');
            $('.inside_menu__wrap').css ('height', 0);
        }
    });
