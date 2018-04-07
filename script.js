(function($) {          
    $(document).ready(function(){   
        var navOffset = jQuery(".background-white").offset().top;
//        alert(navOffset);
        $(window).scroll(function(){                          
//            if ($(this).scrollTop() > navOffset) {
//                $('.header').fadeIn(500);
//            } else {
//                $('.header').fadeOut(500);
//            }       
            
            $('.header').each(function() {
                var top_of_window = $(window).scrollTop();
                if (top_of_window > navOffset) {
//                    $(this).fadeTo(500,1);
//                    $(this).animate({'opacity':'1'},1500);
                    if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
                } else {
//                    $(this).fadeTo(500,0);
                    if ($(this).css('opacity')==1) {$(this).fadeTo(500,0);}
                }
            });
        });
    });
})(jQuery);

//jQuery(document).ready(function() {
//   var navOffset = jQuery(".nav-wrapper").offset().top;
//    
//    jQuery(window).scroll(function() {
//        var scrollPos = jQuery(window).scrollTop();
//        jQuery(".status").html(scrollPos);
//        
////        if (scrollPos > navOffset) {
////            jQuery(".nav-wrapper").addClass("fixed");
////        } else {
////            jQuery(".nav-wrapper").addClass("fixed");
////        }
//    });
//    
//    
//    
//});

//// When the user scrolls the page, execute myFunction 
//window.onscroll = function() {myFunction()};
//
//// Get the navbar
//var navbar = document.getElementsByClassName("nav-wrapper");
//
//// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
//
//alert(sticky);

