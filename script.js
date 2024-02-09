$(function () {
$.fn.hasScrollBar = function () {
    return (this.prop("scrollWidth") == 0 && this.prop("clientWidth") == 0) ||
        (this.prop("scrollWidth") > this.prop("clientWidth"));
};

function wheel(name) {
    $(name).on('mousewheel', function (e) {
        var hasScroll = $(this).hasScrollBar();
        if (!hasScroll) {
            // 스크롤이 없으면 그냥 일반 스크롤
        } else {
            e.preventDefault();
            var wheelDelta = e.originalEvent.wheelDelta;
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
    });
}


    var $scroll = $('#scroll');
    
    // 초기 스크롤 위치를 오른쪽 끝으로 설정
    $scroll.scrollLeft($scroll.prop('scrollWidth'));

    wheel('#scroll');
});
