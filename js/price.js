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



var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var id = getUrlParameter('id');
if (id && id == 101) {
    var verItem = $('#101');
}
if (id && id == 102) {
    var verItem = $('#102');
}
if (id && id == 103) {
    var verItem = $('#103');
}
if (id && id == 104) {
    var verItem = $('#104');
}
if (id && id == 105) {
    var verItem = $('#105');
}
if (id && id == 106) {
    var verItem = $('#106');
}
if (id && id == 107) {
    var verItem = $('#107');
}
if (id && id == 108) {
    var verItem = $('#108');
}
if (id && id == 109) {
    var verItem = $('#109');
}
if (id && id == 110) {
    var verItem = $('#110');
}
if (id && id == 111) {
    var verItem = $('#111');
}
if (id && id == 112) {
    var verItem = $('#112');
}
if (id && id == 113) {
    var verItem = $('#113');
}
verContent = verItem.find('.prices__wrap'), 
maxHeight = verItem.find('.prices__content').outerHeight(true);
verItem.addClass('active');
verContent.css ({'height' : maxHeight});
