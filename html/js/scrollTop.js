/**
 * Created by GuoYue on 2016/6/27.
 */
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $("#scrollTop").fadeIn(400);
        }else{
            $("#scrollTop").fadeOut(400);
        }
    });
    $("#scrollTop").click(function(){
        $("html,body").animate({scrollTop:0},400)
    });
});
