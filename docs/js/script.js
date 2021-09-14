$(function () {

    // スムーズスクロール
    $('header nav a, footer nav a, .sp-nav-item a').click(function () {
        var headerHeight = 80; /** ヘッダーの高さ */
        var adjust = 10; /** スクロール時の調整値 */
        var speed = 1000;
        var href = $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight - adjust;

        $('html,body').animate({ scrollTop: position }, speed, 'swing');
        return false;
    })

    // ヘッダーメニューボタン
    var headerMenuBtn = $("button.header-menu-btn");
    var headerMenuBtnIcon = $("button.header-menu-btn i");
    var spNav = $(".sp-nav");
    var spNavLink = $(".sp-nav a");

    /**
     * SPメニューの開閉関数
     */
    function onChangeMenu() {
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
            // ヘッダーボタン
            headerMenuBtnIcon.removeClass("fa-times");
            headerMenuBtnIcon.addClass("fa-bars");
            headerMenuBtn.attr("aria-label", "メニューを開く")

            // メニュー
            spNav.removeClass("js-sp-nav-is-open");
            spNav.addClass("js-sp-nav-is-hidden");
        } else {
            // ヘッダーボタン
            headerMenuBtnIcon.removeClass("fa-bars");
            headerMenuBtnIcon.addClass("fa-times");
            headerMenuBtn.attr("aria-label", "メニューを閉じる")

            // メニュー
            spNav.removeClass("js-sp-nav-is-hidden");
            spNav.addClass("js-sp-nav-is-open");
        }
    }

    // ヘッダメニューアイコンをクリック時に、メニューを開閉する
    headerMenuBtn.click(function () {
        onChangeMenu();
    });

    // Spメニューのリンクをクリック時に、メニューを閉じる
    spNavLink.click(function () {
        onChangeMenu();
    });
});