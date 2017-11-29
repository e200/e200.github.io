$(function(){
    $('.humburguer').on('click', function(e){
       e.preventDefault();
        
       $('body').toggleClass('no-overflow');
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
        }, 6000);
    }, 5000);

    /**
     * Prevents the header sliders from being
     * animated when the page loads.
     * 
     * @see https://stackoverflow.com/questions/27938900/how-to-prevent-css-keyframe-animation-to-run-on-page-load
     */
    setTimeout(function(){
        $('.preload').removeClass('preload');
    }, 500)
})