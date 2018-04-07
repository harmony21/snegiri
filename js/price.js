$(document).ready(function() {
    $('.prices__item').on('click', function (ev){
        ev.preventDefault();

        var element = $(ev.target),
        verItem = element.closest('.prices__item'),
        verItems = verItem.siblings(),
        verContent = verItem.find('.prices__wrap'), 
        verContents = verItems.find('.prices__wrap'),
        maxHeight = verItem.find('.prices__content').outerHeight(true);

        if (!verItem.hasClass('active')) {
            verItems.removeClass('active');
            verItem.addClass('active');

            verContents.css ({
                'height' : 0
            });

            verContent.css ({
                'height' : maxHeight
            });

        } else {
            verItem.removeClass('active');

            verContent.css ({
                'height' : 0
            });
        }

    })
})
