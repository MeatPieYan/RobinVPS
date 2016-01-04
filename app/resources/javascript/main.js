/**
 * Created by Robin on 15/10/17.
 */
(function($) {
    var $window = $(window);
    var $body = $('body');

    $body.addClass('is-loading');

    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-loading');
        }, 100);
    });

    $('#more').click(function () {
        $('html, body').animate({scrollTop: $('#one').offset().top}, 1000, 'swing');
    });

    $window.scroll(function (event) {
        var scrollTop = $(window).scrollTop();
        var nav = $('#navbar');
        if(scrollTop < $('#one').offset().top - 60) {
            if(!nav.hasClass('firstNav'))
                nav.addClass('firstNav');
        }else {
            if(nav.hasClass('firstNav'))
                nav.removeClass('firstNav');
        }
    })

})(jQuery);