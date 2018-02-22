function scrollTo(pos, duration) {

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