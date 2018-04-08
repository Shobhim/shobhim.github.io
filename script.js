(function($) {          
    $(document).ready(function(){   
        var navOffset = jQuery(".background1").offset().top;
//        alert(navOffset);
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > navOffset) {
                $('.fixed-header').css("z-index","2");
                $('.fixed-header').fadeIn(500);
            } else {
                $('.fixed-header').fadeOut(500);
            }       
            
//            $('.header').each(function() {
//                var top_of_window = $(window).scrollTop();
//                if (top_of_window > navOffset) {
////                    $(this).fadeTo(500,1);
////                    $(this).animate({'opacity':'1'},1500);
//                    if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
//                } else {
////                    $(this).fadeTo(500,0);
//                    if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
//                }
//            });
        });
    });
})(jQuery);