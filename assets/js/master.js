e200(function(){
    e200('span').on('click', function(e){
        e.preventDefault()

        alert('')
    })

    // // Sets a delay for start the transition.
    // setTimeout(function(){
    //     var words = e200('.words')

    //     // Transition cycle.
    //     setInterval(function(){
            
    //         // Getting the current displayed thing i love.
    //         currentThing = words.find('.active');

    //         // Getting the next thing i love to be displayed.
    //         nextThing = currentThing.nextSibling;

    //         /**
    //          * If nextThing is null, that means we're
    //          * in the last thing i like.
    //          * 
    //          * So, we should restart the cycle from top
    //          * to the bottom again.
    //          * 
    //          * Otherwise we just keep displaying one by other.
    //          */
    //         if (nextThing === null) {
    //             toggleClass(thing_i_love.firstChild, active_classname);
    //             toggleClass(thing_i_love.lastChild, active_classname);
    //         } else {
    //             toggleClass(currentThing, active_classname);
    //             toggleClass(nextThing, active_classname);
    //         }
    //     }, 3000);
    // }, 3000);
})