$(document).ready(function() {

    $('.zapis').on('click', function (ev) {
        ev.preventDefault;

        $(".form").fadeIn();   
        $(".wrap").animate({opacity: 0.5}, 400); 
    });

    $('.zapis--footer').on('click', function (ev) {
        ev.preventDefault;
        $(".form").fadeIn();   
        $(".wrap").animate({opacity: 0.5}, 400); 
    });

    $('.form__close-btn').on('click', function (ev) {
        ev.preventDefault;
        $(".form").fadeOut();   
        $(".wrap").animate({opacity: 1}, 400);    
    });

});


