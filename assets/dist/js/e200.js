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

        backToTopButton
            .fadeIn(300)
            .css({display: 'flex'});

        backToTopButtonRestartInterval();

    } else {

        backToTopButton.fadeOut(300);
        
    }
});
$('#hamburguer').on('click', function(e) {
  e.preventDefault();
   
  $(this).toggleClass('is-active');
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
var submitButton = $('#get-in-touch__form__submit-button'),
    smileIcon    = $('.get-in-touch__smile');

const spinnerHTML = '<div class="spinner">\
                        <div class="bounce1"></div>\
                        <div class="bounce2"></div>\
                        <div class="bounce3"></div>\
                    </div>';

function smile(status = true) {

    if (status === false) {
        
        smileIcon
            .addClass('fa-frown-o')
            .removeClass('fa-meh-o');

    } else if (status === null) {

        smileIcon
            .removeClass('fa-smile-o')
            .addClass('fa-meh-o');

    } else {

        smileIcon
            .addClass('fa-smile-o')
            .removeClass('fa-meh-o');

    }

}

$('#get-in-touch__form').validate({
    debug: true,
    errorClass: 'error',
    errorPlacement: function(error, element) {

        element.before(error);

    },
    submitHandler: function(form) {

        smile(null);

        submitButton.html(spinnerHTML);

        $.post(
            'https://e200-mailer.herokuapp.com/',
            $(form).serialize()
        ).done(function() {

            $(form)
                .find(':input')
                .prop('disabled', 'disabled');

            smile();
        
            submitButton.addClass('success');
            submitButton.text('Successfully!');

        }).fail(function() {

            smile(false);

            submitButton.text('Error! Try again');

        });

    },
    invalidHandler: function(form, validator) {

        var errors = validator.numberOfInvalids();

        if (errors) {

            smile(false);

            validator.errorList[0].element.focus();

        }

    }
});
$('.presentation__name').on('click', function(e) {
  
    e.preventDefault();
    
    if (presentationTooltip.css('visibility') == 'hidden') {
      
        presentationTooltip.addClass('is-visible');

    } else {

        presentationTooltip.removeClass('is-visible');

    }

}).on('mouseout', function() {

    presentationTooltip.removeClass('is-visible');

});
// Sets a delay for start the transition.
setTimeout(function() {

  var class_name = 'is-active',
      words      = $('.introduction__words'),
      firstChild = words.find('span').first();

  // Transition cycle.
  setInterval(function() {    

      // Getting the current word.
      currentWord = words.find('.' + class_name);

      // Getting the next word to be displayed.
      nextWord = currentWord.next();

      currentWord.toggleClass(class_name);
      
      nextWord.length ? nextWord.toggleClass(class_name) : firstChild.toggleClass(class_name);

  }, 4000);
  
}, 1500);
$('.techs__slider').slick({
  autoplay: true,
  infinite: true,
  speed: 150,
  slidesToShow: 7,
  slidesToScroll: 1,
  swipeToSlide: true,
  // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
  touchThreshold: 100,
  prevArrow: $('.techs__arrow.prev'),
  nextArrow: $('.techs__arrow.next'),
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
});
})(jQuery, window);