;(function ($, window) {
var
  backToTopButton = $('#back-to-top-button'),
  oldScrollPos = 0,
  newScrollPos,
  backToTopButtonInterval;

backToTopButton.on('click', function(e) {

  e.preventDefault();

  scrollTo(0);

}).on('mouseover', function(){

  backToTopButtonStopInterval();

}).on('mouseleave', function(){

  backToTopButtonRestartInterval();

});
    

function canShowBackToTopButton() {
    return (newScrollPos < oldScrollPos) && (presentation.height() < newScrollPos);
}

function backToTopButtonRestartInterval() {
    if (backToTopButtonInterval) {
        clearInterval(backToTopButtonInterval);
    }

    backToTopButtonInterval = setTimeout(function() {

        backToTopButton.fadeOut(300);
    
    }, 3000);
}

function backToTopButtonStopInterval() {

    clearInterval(backToTopButtonInterval);

}

$(window).on('scroll', function() {

    oldScrollPos = newScrollPos;
    newScrollPos = $(this).scrollTop();

    if (canShowBackToTopButton()) {

        backToTopButton.fadeIn(300);

        backToTopButtonRestartInterval();

    } else {

        backToTopButton.fadeOut(300);
        
    }
});
$('.hamburguer').on('click', function(e){
  e.preventDefault();
   
  $('.header').toggleClass('active');
});
$('#jumper').on('click', function(e){
  e.preventDefault();

  scrollTo('#presentation', 800);
});
function scrollTo(pos, duration) {

  if (!duration) {
      duration = 600;
  }

  if (typeof(pos) === 'string') {
      pos = $(pos).offset().top
  }
  
  $('html, body').animate({
      scrollTop: pos
  }, duration);
  
}
window.sr = ScrollReveal({viewFactor: 0.3});

var presentation        = $('.presentation'),
    presentationTooltip = $('.presentation__name__tooltip');

/**
 * Prevents the header sliders from being
 * animated when the page loads.
 * 
 * @see https://stackoverflow.com/questions/27938900/how-to-prevent-css-keyframe-animation-to-run-on-page-load
 */
setTimeout(function(){
    $('.js-prevent-menu-animation')
        .removeClass('js-prevent-menu-animation');
}, 500);    

$('#git-form').validate();

sr.reveal('.presentation__picture');
sr.reveal('.projects__title');
sr.reveal('.project__item');
})(jQuery, window);