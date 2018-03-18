$(document).ready(function() {
    $('.mobile-menu').on('click', function (ev) {
        ev.preventDefault;

        if(!$(".menu_wrapper").hasClass('active')) {
            $(".menu_wrapper").addClass('active');

            $('.page_top').css("height", "486px");
        }
        else {
            $(".menu_wrapper").removeClass('active');
            $('.page_top').css("height", "220px");
        }
    })
});