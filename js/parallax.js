$(window).bind('scroll',function(e){
  parallaxScroll();
 });

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.city').css('top',(0+(scrolled*.25))+'px');
  $('.bird1').css('top',(0+(scrolled*.35))+'px');
  $('.sun').css('top',(0+(scrolled*.5))+'px');
  $('.trees').css('top',(0+(scrolled*.15))+'px');
  $('header').css('top',(0+(scrolled*.55))+'px');
  $('.mountain_air').css('top',(-150+(scrolled*.1))+'px');
  $('.mountains').css('top',(-250+(scrolled*.15))+'px');
	$('.walkers').css('top',(-400+(scrolled*.25))+'px');
}
