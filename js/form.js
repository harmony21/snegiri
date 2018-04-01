$(document).ready(function() {

    $('.zapis').on('click', function (ev) {
        ev.preventDefault;
        $(".wrapper").fadeIn(400);
        $(".form").fadeIn(400);   
    });

    $('.zapis--footer').on('click', function (ev) {
        ev.preventDefault;
        $(".form").fadeIn();   
        $(".wrapper").fadeIn(400); 
    });

    $('.form__close-btn').on('click', function (ev) {
        ev.preventDefault;
        $(".form").fadeOut(400);   
        $(".wrapper").fadeOut(400);
    });

    $('.wrapper').on('click', function (ev) {
        $(".form").fadeOut(400);   
        $(".wrapper").fadeOut(500);
    })

});





