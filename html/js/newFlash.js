/**
 * Created by GuoYue on 2016/6/27.
 */
$(function(){
    //快讯滚动条
    $(".news-flash-list>li").last().css("margin-bottom","0");
    $(".news-flash-list").slimScroll({
        height:"520px",
        size : "5px",
        color: "#e4e4e4",
        alwaysVisible: true,
        allowPageScroll: true
    });

    //点击排行切换
    var $rankTabs=$(".click-rank-aside .aside-title .buttons .btn");
    var $rankLists=$(".click-rank-aside .aside-content .rankList");
    //默认第一条显示
    $($rankTabs).first().addClass("on");
    $($rankLists).first().show().addClass("on");

    $($rankTabs).click(function(){
        if(!$(this).hasClass("on")){
            var tragetIndex=$rankTabs.index(this);
            $(this).addClass("on").siblings(".btn").removeClass("on");
            $rankLists.eq(tragetIndex).show(0).addClass("on").siblings(".on").hide().removeClass("on");
        }
    });
});