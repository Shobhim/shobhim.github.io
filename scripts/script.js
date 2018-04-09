$(function() {
    var navOffset = $("#about").offset().top - 1;
    
    $(document).on('scroll', function() {
        var scrollTop = $(document).scrollTop();
        
        if (scrollTop > navOffset) {
            $('.fixed-header').css("z-index","2");
            $('.fixed-header').fadeIn(500);
        } else {
            $('.fixed-header').fadeOut(500);
        }
    });
    
    var aboutOffsetTop = $('#about').offset().top;
    var resumeOffsetTop = $('#resume').offset().top;
    var projectsOffsetTop = $('#projects').offset().top;
    var contactOffsetTop = $('#contact').offset().top;
    
    $(document).on('scroll', function() {
        var scrollTop = $(document).scrollTop();
        var activeLi;
        
        if (scrollTop >= aboutOffsetTop && scrollTop < resumeOffsetTop) {
            activeLi = $('.header-items>li:nth-child(1)');
        } else if (scrollTop >= resumeOffsetTop && scrollTop < projectsOffsetTop) {
            activeLi = $('.header-items>li:nth-child(2)');
        } else if (scrollTop >= projectsOffsetTop && scrollTop < contactOffsetTop) {
            activeLi = $('.header-items>li:nth-child(3)');
        } else if (scrollTop >= contactOffsetTop) {
            activeLi = $('.header-items>li:nth-child(4)');
        }
        
        activeLi.addClass('active');
        $('.header-items>li').not(activeLi).removeClass('active');
    });
});
