$(function(){
    $('.humburguer').on('click', function(e){
       e.preventDefault();
       
       $(this).toggleClass('active');
       
        for (var i = 0; i < 5; i++) {
            $('.nav-anim-el-' + i).toggleClass('active');
        }       
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
    }, 6000);
})