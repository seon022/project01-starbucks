
// 본문2 - 슬라이더
$('.m2_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});
// 본문3
$('.m3_menu p').click(function(e){
    e.preventDefault();
    $('.m3_menu p').removeClass('active');
    $('.m3_list').removeClass('active');
    let i = $(this).index();
    $('.m3_menu p').eq(i).addClass('active');
    $('.m3_list').eq(i).addClass('active');
});


// 본문4
$('.m4_btn .m4_bt1').mouseover(function(){
    $(this).removeClass('m4_bt1');
    $(this).addClass('m4_bt2');
}).mouseout(function(){
    $(this).addClass('m4_bt1');
    $(this).removeClass('m4_bt2');
});
$('.m4_btn .m4_bt2').mouseover(function(){
    $(this).removeClass('m4_bt2');
    $(this).addClass('m4_bt1');
}).mouseout(function(){
    $(this).addClass('m4_bt2');
    $(this).removeClass('m4_bt1');
});

// 본문4 - 슬라이더
$('.m4List').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow : '.btn_prev',
    nextArrow : '.btn_next',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400
});


// 본문5 NEW ARRIVALS 슬라이더
$('.m5_list_wrap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : '.m5_list .btn_prev',
    nextArrow : '.m5_list .btn_next',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400
});

$('.m6_list_wrap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : '.m6_list .btn_prev',
    nextArrow : '.m6_list .btn_next',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400
});

