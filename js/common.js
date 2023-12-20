
// * 헤더 gnb
$('#gnb > ul > li').mouseover(function(){
    $(this).addClass('active');
    $(this).find('.depth2').stop().slideDown(300);
    $(this).children('a').css('color', '#fff');
    $(this).find('.depth2 > ul > li > a').css('color', '#fff');
}).mouseout(function(){
    $(this).find('.depth2').stop().slideUp(100, function(){
        $(this).parent().removeClass('active');
        $(this).siblings('a').css('color', '#222');
    });
});

//  브라우저 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();

    // * TOP 버튼
    if(sct >= 600){
        $('.gotoTop').css('opacity', 1);
    }   else{
        $('.gotoTop').css('opacity', 0);
    }

    $('.gotoTop a').click(function(e){
        e.preventDefalut();
		$('html, body').stop().animate({ scrollTop: 0 }, 600);
    }); 

});// 브라우저 스크롤 이벤트 마지막
