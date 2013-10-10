$(document).ready(function() {

    $(window).bind('scroll',function(e){
      parallaxScroll();
    });

});

/* Scroll the background layers */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-back').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-mid').css('top',(0-(scrolled*.5))+'px');
  $('#parallax-top').css('top',(0-(scrolled*.75))+'px');
}

