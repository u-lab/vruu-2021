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

    //// Event-btn クリックファンクション
    //$('.event-btn').click(function(){
    //    $('.event-btn').text('誠意制作中です！');

    //    setTimeout(function() {
    //        $('.event-btn').text('イベントへGo!');
    //    }, 3000);

    //})

    // ヘッダーメニューボタン
    var headerMenuBtn = $("button.header-menu-btn");
    var headerMenuBtnIcon = $("button.header-menu-btn i");
    // Spメニュー
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

// Newsリストの処理
$(function () {
    var newsList = window.newsList;

    // newsの逆順
    newsList.reverse()

    var newsNum = newsList.length;

    for (var i = 0; i < newsNum; i++) {

        var newsItem = newsList[i]

        var newsTitle = newsItem.title;
        var newsDate = formatNewsDate(newsItem.createdAt);
        var newsImage = newsItem.imageLink;
        if (!newsImage) {
            newsImage = 'img/top_picture.png';
        }
        var newsLink = newsItem.link;

        // 行が空の時、エラーが出ないようにした
        if (!newsTitle && !newsDate) {
            continue
        }

        var newsNo = 'news-' + (i + 1);

        $('.news-list').append('<li class="' + newsNo + '"></li>');

        $('.news-list li.' + newsNo).append('<a class="news-link link-' + newsNo + '"></a>');

        const newsListLink = $('.news-list .link-' + newsNo)

        newsListLink.append('<img class="' + newsNo + '">');
        newsListLink.append('<p class="news-date ' + newsNo + '"></p>');
        newsListLink.append('<p class="news-title ' + newsNo + '"></p>');



        newsListLink.attr('href', newsLink);

        $('.news-list .news-title.' + newsNo).append(newsTitle);
        $('.news-list .news-date.' + newsNo).append(newsDate);
        $('.news-list img.' + newsNo).attr('src', newsImage);
    }

});

/**
 * ニュースの日付を YYYY年MM月DD日 に変換する
 *
 * @param {String} date
 * @returns
 */
function formatNewsDate(date) {
    var split = date.split('-')
    return split[0] + '年' + split[1] + '月' + split[2] + '日'
}