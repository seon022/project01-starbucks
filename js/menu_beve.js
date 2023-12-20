// main2 본문2
let idName;

$('.beverages > ul > li').addClass('active');
$('.menu_cate a').click(function(e){
    e.preventDefault();
    $('.menu_cate a').removeClass('active');
    $(this).addClass('active');

    idName = $(this).attr('id');
    $('.beverages > ul > li').removeClass('active');
    if(idName == 'allBev'){
        $('.beverages > ul > li').addClass('active');
    }   else{
        $(`.${idName}`).addClass('active');
    }
})