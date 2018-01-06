window.sr = ScrollReveal({viewFactor: 0.3});

$(function(){
    var
        btt = $('.btt'),
        presentation = $('.presentation');

    $('.humburguer').on('click', function(e){
       e.preventDefault();
        
       $('.header').toggleClass('active');
    });

    $('.btt').on('click', function(e){
        e.preventDefault();

        scrollTo(0);
    });

    $('#scroll-to-intro').on('click', function(e){
        e.preventDefault();

        scrollTo('.intro');
    });

    $('#btn-ttm').on('click', function(){
        var me = $(this);

        me.html('<div class="spinner">\
                            <div class="bounce1"></div>\
                            <div class="bounce2"></div>\
                            <div class="bounce3"></div>\
                      </div>');

        setTimeout(function(){
            me.html('Successfully!');

            //$('.git .form-item').css({opacity: .3});
        }, 5000);

        //$.post('https://ancient-escarpment-86494.herokuapp.com/', )
    });

    var
        oldScrollPos = 0,
        newScrollPos,
        interval;

    $(window).on('scroll', function(){
        oldScrollPos = newScrollPos;
        newScrollPos = $(this).scrollTop();

        if (newScrollPos < oldScrollPos && presentation.height() < newScrollPos) {
            btt.fadeIn(300);

            if (interval) {
                clearInterval(interval);
            }

            interval = setTimeout(function(){
                btt.fadeOut(300);
            }, 3000);
        } else {
                btt.fadeOut(300);
        }
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
        var class_name = 'active',
            words = $('.words'),
            firstChild = words.first();

        // Transition cycle.
        setInterval(function(){            
            // Getting the current word.
            currentWord = words.find('.active');

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
        $('.preload').removeClass('preload');
    }, 500);

    $('.techs-slider').slick({
        autoplay: true,
        infinite: true,
        speed: 150,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
        touchThreshold: 100,
        prevArrow: $('.techs .arrow.prev'),
        nextArrow: $('.techs .arrow.next'),
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

    sr.reveal('section:not(.git) .title');
    sr.reveal('.intro .pic');
    sr.reveal('.projects .project');
});