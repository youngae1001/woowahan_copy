$(document).ready(function(){

    $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li > a").mouseover(function(){
        $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li").removeClass("active")
    })
    $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li > a").mouseleave(function(){
        $(".top_bar_wrap > .top_bar > .nav_box > ul > li > .sub_top_bar_wrap > .sub_top_bar > li:first-child").addClass("active")
    })



    // 끝
})