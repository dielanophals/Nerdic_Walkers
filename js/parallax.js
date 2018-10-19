$(window).bind('scroll',function(e){
  parallaxScroll();
 });

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.city').css('top',(0+(scrolled*.25))+'px');
  $('.air').css('top',(0+(scrolled*.35))+'px');
  $('.sun').css('top',(0+(scrolled*.5))+'px');
	$('.trees').css('top',(0+(scrolled*.15))+'px');
}
