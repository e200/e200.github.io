window.sr = ScrollReveal({viewFactor: 0.3});

$(function(){
    var
        backToTopButton     = $('#back-to-top-bottom'),
        presentation        = $('.presentation'),
        presentationTooltip = $('.presentation--name--tooltip');;

    $('.hamburguer').on('click', function(e){
       e.preventDefault();
        
       $('.header').toggleClass('active');
    });

    $('#back-to-top-button').on('click', function(e){
        e.preventDefault();

        scrollTo(0);
    });

    $('#jumper').on('click', function(e){
        e.preventDefault();

        scrollTo('#presentation', 800);
    });

    $('.presentation--name')
        .on('click', function(e){
            e.preventDefault();
            
            if (presentationTooltip.css('visibility') == 'hidden') {
                presentationTooltip.addClass('is-visible');
            } else {
                presentationTooltip.removeClass('is-visible');
            }            
        }).on('mouseout', function(){
            presentationTooltip.removeClass('is-visible');
        })


    $('#talt-to-me-button').on('click', function(){
        var me = $(this);

        $('.git--smile')
            .removeClass('fa-smile-o')
            .addClass('fa-meh-o');

        me.html('<div class="spinner">\
                    <div class="bounce1"></div>\
                    <div class="bounce2"></div>\
                    <div class="bounce3"></div>\
                </div>');

        setTimeout(function(){
            $('.git--smile')
                .addClass('fa-smile-o')
                .removeClass('fa-meh-o');
            me.html('Successfully!');

            //.fa-frown-o


            //$('.git .form-item').css({opacity: .3});
        }, 5000);

        //$.post('https://ancient-escarpment-86494.herokuapp.com/', )
    });

    var
        backToTopButtonOldScrollPos = 0,
        backToTopButtonNewScrollPos,
        backToTopButtonInterval;

    function canShowBackToTopButton(){
        return (backToTopButtonNewScrollPos < backToTopButtonOldScrollPos) &&
               (presentation.height() < backToTopButtonNewScrollPos);
    }

    function backToTopButtonRestartInterval(){
        if (backToTopButtonInterval) {
            clearInterval(backToTopButtonInterval);
        }

        backToTopButtonInterval = setTimeout(function(){
            backToTopButton.fadeOut(300);
        }, 3000);
    }

    function backToTopButtonStopInterval(){
        clearInterval(backToTopButtonInterval);
    }

    $(window).on('scroll', function(){
        oldScrollPos = newScrollPos;
        newScrollPos = $(this).scrollTop();

        if (canShowBtt()) {
            btt.fadeIn(300);

            bttRestartInterval();
        } else {
            btt.fadeOut(300);
        }
    });

    btt
        .on('mouseover', function(){
            bttStopInterval();
        })
        .on('mouseleave', function(){
            bttRestartInterval();
        });

    function scrollTo(pos, duration){
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

    // Sets a delay for start the transition.
    setTimeout(function(){
        var class_name = 'is-active',
            words = $('.introduction--words'),
            firstChild = words.find('span').first();

        // Transition cycle.
        setInterval(function(){            
            // Getting the current word.
            currentWord = words.find('.' + class_name);

            // Getting the next word to be displayed.
            nextWord = currentWord.next();

            currentWord.toggleClass(class_name);
            
            nextWord.length ? nextWord.toggleClass(class_name) : firstChild.toggleClass(class_name);
        }, 4000);
    }, 2500);

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

    $('.techs--slider').slick({
        autoplay:       true,
        infinite:       true,
        speed:          150,
        slidesToShow:   7,
        slidesToScroll: 1,
        swipeToSlide:   true,
        pauseOnHover:   false,
        // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
        touchThreshold: 100,
        prevArrow:      $('.techs--arrow.prev'),
        nextArrow:      $('.techs--arrow.next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:   7,
                slidesToScroll: 1,
                infinite:       true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow:   5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings:         {
                slidesToShow:   3,
                slidesToScroll: 1
              }
            }
          ]
      });

    $('#git-form').validate();

    sr.reveal('.presentation--picture');
});