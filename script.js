(function($) {          
    $(document).ready(function(){   
        var navOffset = jQuery(".background1").offset().top - 2;
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > navOffset) {
                $('.fixed-header').css("z-index","2");
                $('.fixed-header').fadeIn(500);
            } else {
                $('.fixed-header').fadeOut(500);
            }       
        });
    });
})(jQuery);

