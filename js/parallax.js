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
  $('.clouds').css('top',(-150+(scrolled*.1))+'px');
  $('.mountains').css('top',(-250+(scrolled*.15))+'px');
	$('.walkers').css('top',(-500+(scrolled*.25))+'px');
}
