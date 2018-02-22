$('.presentation__name').on('click', function(e) {
  
    e.preventDefault();
    
    if (presentationTooltip.css('visibility') == 'hidden') {
      
        presentationTooltip.addClass('is-visible');

    } else {

        presentationTooltip.removeClass('is-visible');

    }

}).on('mouseout', function() {

    presentationTooltip.removeClass('is-visible');

})