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