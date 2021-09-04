$(function(){

    $('header a').click(function(){
        var headerHeight = 80;
        var speed = 1000;
        var href = $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHeight;

        $('html,body').animate({scrollTop:position}, speed, 'swing');
        return false;
    })
});