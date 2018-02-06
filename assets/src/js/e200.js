window.sr = ScrollReveal({viewFactor: 0.3});

$(function(){
    var
        btt = $('.btt'),
        presentation = $('.presentation');

    $('.hamburguer').on('click', function(e){
       e.preventDefault();
        
       $('.header').toggleClass('active');
    });

    $('.btt').on('click', function(e){
        e.preventDefault();

        scrollTo(0);
    });

    $('#jumper').on('click', function(e){
        e.preventDefault();

        scrollTo('#presentation', 800);
    });

    $('#btn-ttm').on('click', function(){
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
        oldScrollPos = 0,
        newScrollPos,
        interval;

    function canShowBtt(){
        return (newScrollPos < oldScrollPos) && (presentation.height() < newScrollPos);
    }

    function bttRestartInterval(){
        if (interval) {
            clearInterval(interval);
        }

        interval = setTimeout(function(){
            btt.fadeOut(300);
        }, 3000);
    }

    function bttStopInterval(){
        clearInterval(interval);
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
        var class_name = 'intro--word__active',
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
        autoplay: true,
        infinite: true,
        speed: 150,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
        touchThreshold: 100,
        prevArrow: $('.techs--arrow.prev'),
        nextArrow: $('.techs--arrow.next'),
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

    $('#git-form').validate();

    sr.reveal('.presentation--picture');
});