var submitButton = $('#get-in-touch__form__submit-button'),
    smileIcon    = $('.get-in-touch__smile');

const spinnerHTML = '<div class="spinner">\
                        <div class="bounce1"></div>\
                        <div class="bounce2"></div>\
                        <div class="bounce3"></div>\
                    </div>';

function smile(status = true) {

    if (status === false) {
        
        smileIcon
            .addClass('fa-frown-o')
            .removeClass('fa-meh-o');

    } else if (status === null) {

        smileIcon
            .removeClass('fa-smile-o')
            .addClass('fa-meh-o');

    } else {

        smileIcon
            .addClass('fa-smile-o')
            .removeClass('fa-meh-o');

    }

}

$('#get-in-touch__form').validate({
    debug: true,
    errorClass: 'error',
    errorPlacement: function(error, element) {

        element.before(error);

    },
    submitHandler: function(form) {

        smile(null);

        submitButton.html(spinnerHTML);

        $.post(
            'https://e200-mailer.herokuapp.com/',
            $(form).serialize()
        ).done(function() {

            $(form)
                .find(':input')
                .prop('disabled', 'disabled');

            smile();
        
            submitButton.addClass('success');
            submitButton.text('Successfully!');

        }).fail(function() {

            smile(false);

            submitButton.text('Error! Try again');

        });

    },
    invalidHandler: function(form, validator) {

        var errors = validator.numberOfInvalids();

        if (errors) {

            smile(false);

            validator.errorList[0].element.focus();

        }

    }
});