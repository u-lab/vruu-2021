$(function () {

    // スムーズスクロール
    $('header nav a, footer nav a').click(function () {
        var headerHeight = 80;
        var speed = 1000;
        var href = $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;

        $('html,body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    })

    // ヘッダーメニューボタン
    var headerMenuBtn = $("button.header-menu-btn");
    headerMenuBtn.click(function () {
        var headerMenuBtnIcon = $("button.header-menu-btn i");
        var classVal = headerMenuBtnIcon.attr('class'); // classの値を取得
        var classVals = classVal.split(' ');

        var isOpen = false;
        for (var i = 0; i < classVals.length; i++) {
            if (classVals[i] == 'fa-times') {
                isOpen = true;
                break;
            }
        }

        if (isOpen) {
            headerMenuBtnIcon.removeClass("fa-times");
            headerMenuBtnIcon.addClass("fa-bars");
            headerMenuBtn.attr("aria-label", "メニューを開く")
        } else {
            headerMenuBtnIcon.removeClass("fa-bars");
            headerMenuBtnIcon.addClass("fa-times");
            headerMenuBtn.attr("aria-label", "メニューを閉じる")
        }
    });
});