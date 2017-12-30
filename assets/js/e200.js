window.sr = ScrollReveal({viewFactor: 0.3});

$(function(){
    $('.humburguer').on('click', function(e){
       e.preventDefault();
        
       $('.header').toggleClass('active');
    })

    $('#scroll-to-intro').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(".intro").offset().top
        }, 600);
    });

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
            
            nextWord ? nextWord.toggleClass(class_name) : firstChild.toggleClass(class_name);
        }, 4000);
    }, 3000);

    /**
     * Prevents the header sliders from being
     * animated when the page loads.
     * 
     * @see https://stackoverflow.com/questions/27938900/how-to-prevent-css-keyframe-animation-to-run-on-page-load
     */
    setTimeout(function(){
        $('.preload').removeClass('preload');
    }, 500)

    $('.techs-slider').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        // https://github.com/kenwheeler/slick/issues/2002#issuecomment-325806939
        touchThreshold: 100,
        prevArrow: $('.slick-arrow-prev'),
        nextArrow: $('.slick-arrow-next'),
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

    $(window).on('scroll', function(e){
        e.preventDefault();
    })

    sr.reveal('section .title');
    sr.reveal('.intro .pic');
    sr.reveal('.projects .project');
})