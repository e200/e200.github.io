var spinnerHTML = '<div class="spinner">\
                    <div class="bounce1"></div>\
                    <div class="bounce2"></div>\
                    <div class="bounce3"></div>\
                   </div>';



$('#get-in-touch__form__submit-button').on('click', function() {
  
  var me = $(this);

  $('.get-in-touch__smile')
      .removeClass('fa-smile-o')
      .addClass('fa-meh-o');

  me.html();

  setTimeout(function(){
      $('.get-in-touch__smile')
          .addClass('fa-smile-o')
          .removeClass('fa-meh-o');
      me.html('Successfully!');

      //.fa-frown-o


      //$('.get-in-touch .form-item').css({opacity: .3});
  }, 5000);

  //$.post('https://ancient-escarpment-86494.herokuapp.com/', )
});