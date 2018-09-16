$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if ($(window).width() >= 1070) {
        if( scrolled > 300 ) {
            $('.menu_wrapper').addClass('scrolled');
        } 
        if( scrolled <= 300) {     
            $('.menu_wrapper').removeClass('scrolled');
        }
    }
});