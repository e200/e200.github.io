e200(function(){
    e200('.umburg').on('click', function(e){
       e.preventDefault()

       this.toggleClass('umburg-active')
    })

    // Sets a delay for start the transition.
    setTimeout(function(){
        var
            active_class_name = 'active',
            words = e200('.words')

        // Transition cycle.
        setInterval(function(){
            
            // Getting the current word.
            currentWord = words.find('.active');

            // Getting the next word to be displayed.
            nextWord = currentWord.nextSibling;

            /**
             * If nextWord is null, that means we're
             * in the last word.
             * 
             * So, we should restart the cycle from top
             * to the bottom again.
             * 
             * Otherwise we just keep displaying one by other.
             */
            if (nextWord === null) {
                words.firstChild.toggleClass(active_class_name);
                words.lastChild.toggleClass(active_class_name);
            } else {
                currentWord.toggleClass(active_class_name);
                nextWord.toggleClass(active_class_name);
            }
        }, 6000);
    }, 4000);
})