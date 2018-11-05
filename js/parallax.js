$(window).bind('scroll',function(e){
  parallaxScroll();
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.city').css('top',(0+(scrolled*.25))+'px');
  $('.bird1, .bird3, .bird5, .balloon2').css('top',(0+(scrolled*.35))+'px');
  $('.bird2, .bird4, .balloon1').css('top',(0+(scrolled*.5))+'px');
  $('.sun').css('top',(0+(scrolled*.5))+'px');
  $('.trees').css('top',(0+(scrolled*.15))+'px');
  $('header').css('top',(0+(scrolled*.55))+'px');
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $(".arrow_link").addClass("scrolled");
  } else {
    $(".arrow_link").removeClass("scrolled");
  }
});

$(document).ready(function() {

  setTimeout(function(){
    $('.loader').fadeOut(400);
  }, 3000);

  setTimeout(function(){
    $('.loader').css('display', 'none');
  }, 3500);

});
