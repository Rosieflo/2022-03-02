$(document).ready(function(){

  let gnb = $('.gnb > ul > li');

  gnb.mouseenter(function(){
    $(this).find('.sub').stop().slideDown();
  });

  gnb.mouseleave(function(){
    $('.sub').stop().slideUp();
  });

  
  // 이미지 슬라이드
  $('.s_wrap > li:last-child').insertBefore('.s_wrap > li:first-child');
  $('.s_wrap').css('margin-top','-350px');

  function movetop(){
    $('.s_wrap').animate({'margin-top':'-700px'},500,function(){
      $('.s_wrap > li:first-child').insertAfter('.s_wrap > li:last-child');
      $('.s_wrap').css('margin-top','-350px');
    });
  }

  let Timer = setInterval(movetop, 3000);


  // 탭메뉴
  $('.t_con li:first-child .con').show();

  $('.t_con a').click(function(){
    $('.t_con a').removeClass('act');
    $(this).addClass('act');

    $('.con').hide();
    $(this).next().show();
    return false;
  });



  // 모달창
  let btn = $('.t_con > ul > li:first-child > .con > ul > li > a:first-child');
  $(btn).click(function(){
    $('.modal').show();
    });

    $('.c_btn').click(function(){
      $('.modal').hide();
  });

  
});