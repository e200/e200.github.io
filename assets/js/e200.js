window.sr = ScrollReveal({viewFactor: 0.3});

$(function(){
    $('.humburguer').on('click', function(e){
       e.preventDefault();
        
       $('.header').toggleClass('active');
    })

    // Sets a delay for start the transition.
    setTimeout(function(){
        var class_name = 'active',
            words = $('.words'),
            firstChild = words.firstChild();

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

    /*window.addEventListener('scroll', function(e){
        var offset_intro = document.getElementById('intro').offsetTop;

        TweenLite.to(window, 1.5, {scrollTo:offset_intro});
    });*/

    sr.reveal('.section .title');
    sr.reveal('#intro .pic');
    sr.reveal('#projects .project');
    sr.reveal('#techs .tech');
})