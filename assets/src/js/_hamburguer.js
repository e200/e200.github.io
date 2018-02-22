$('.hamburguer').on('click', function(e){
  e.preventDefault();
   
  $('.header').toggleClass('active');
});