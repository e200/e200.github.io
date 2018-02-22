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