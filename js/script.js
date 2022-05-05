$(document).ready(function(){

    $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li > a").mouseover(function(){
        $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li > a").removeClass("active")
    })
    $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li > a").mouseleave(function(){
        $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li:first-child > a").addClass("active")
    })

    $('.slider').on('init', function(event, slick){
        $(".content").eq(1).addClass("active")
    });

    $(".slider").slick({
        autoplay : true ,
        autoplaySpeed : 5000 ,
        dots: true ,
        draggable : true ,
        infinite: true ,
    })

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".content").removeClass("active")
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $(".content").eq(currentSlide+1).addClass("active")
    });

    for(var i = 1; i <= 10; i++) {
        var letter = $(".main_visual > .slider_wrap > .slider .content > a > .txt > p:nth-child("+i+")");
        var delay = 0.2 * i;
        letter.css({
            "transition-delay" : delay + "s",
        })
    }

    // 끝
})