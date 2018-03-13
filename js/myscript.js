
$(function(){
    var $navs = $('.nav-ul li a'),          // µ¼º½
        $sections = $('.section'),       // Ä£¿é
        $window = $(window),
        navLength = $navs.length - 1;

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop(),
            len = navLength;
        for (; len > -1; len--) {
            var that = $sections.eq(len);
            if (scrollTop >= that.offset().top) {
                $navs.removeClass('current').eq(len).addClass('current');
                break;
            }
            if(scrollTop>document.documentElement.clientHeight /2){
                $('.top').fadeIn() ;
            }else {
                $('.top').fadeOut();
            }
        }
    });
    $navs.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': $($(this).attr('href')).offset().top
        }, 400);
    });
    $(".more-nav").on("click", function () {
        $(".nav-xs-ul").stop().slideToggle(300);
    });
    $(".top").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    $(".nav-xs-ul li a").on("click",function(){
        $(".nav-xs-ul").slideUp(300);
    });
    $(window).resize(function (){
        var wid = $(window).width();
        if(wid>768){
            $(".nav-xs-ul").hide();
        }
    });
});

















