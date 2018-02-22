window.sr = ScrollReveal({viewFactor: 0.3});

var presentation        = $('.presentation'),
    presentationTooltip = $('.presentation__name__tooltip');

/**
 * Prevents the header sliders from being
 * animated when the page loads.
 * 
 * @see https://stackoverflow.com/questions/27938900/how-to-prevent-css-keyframe-animation-to-run-on-page-load
 */
setTimeout(function(){
    $('.js-prevent-menu-animation')
        .removeClass('js-prevent-menu-animation');
}, 500);    

$('#git-form').validate();

sr.reveal('.presentation__picture');
sr.reveal('.projects__title');
sr.reveal('.project__item');