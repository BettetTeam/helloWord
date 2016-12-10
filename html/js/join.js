/**
 * Created by GuoYue on 2016/6/26.
 */
$(function () {
    var $expandBtn = $(".join-us .recruit-item .tabs");
    $expandBtn.on("click", function (e) {
        e.preventDefault();
        $this = $(this);
        var $recruitItem = $this.closest(".recruit-item");
        if ($recruitItem.hasClass("expanded")) {
            $recruitItem.removeClass("expanded");
            $recruitItem.find(".content").stop().slideUp(400);
        } else {
            $recruitItem.addClass("expanded").find(".content").stop().slideDown(400);
            $recruitItem.siblings(".recruit-item").removeClass("expanded").find(".content").stop().slideUp(400);
        }
    });
    $(".join-us .recruit-item .slide-up .btn").click(function () {
        $(this).closest(".recruit-item").removeClass("expanded");
        $(this).closest(".content").stop().slideUp(400);
    });
});