window.sr=ScrollReveal({viewFactor:.3}),$(function(){var e=$(".btt"),t=$(".presentation");$(".hamburguer").on("click",function(e){e.preventDefault(),$(".header").toggleClass("active")}),$(".btt").on("click",function(e){e.preventDefault(),l(0)}),$("#scroll-to-intro").on("click",function(e){e.preventDefault(),l(".introduction")}),$("#btn-ttm").on("click",function(){var e=$(this);$(".get-in-touch .smile").removeClass("fa-smile-o").addClass("fa-meh-o"),e.html('<div class="spinner">                    <div class="bounce1"></div>                    <div class="bounce2"></div>                    <div class="bounce3"></div>                </div>'),setTimeout(function(){$(".get-in-touch .smile").addClass("fa-smile-o").removeClass("fa-meh-o"),e.html("Successfully!")},5e3)});var o,s,i=0;function n(){s&&clearInterval(s),s=setTimeout(function(){e.fadeOut(300)},3e3)}$(window).on("scroll",function(){i=o,(o=$(this).scrollTop())<i&&t.height()<o?(e.fadeIn(300),n()):e.fadeOut(300)}),e.on("mouseover",function(){clearInterval(s)}).on("mouseleave",function(){n()});function l(e,t){t||(t=600),"string"==typeof e&&(e=$(e).offset().top),$("html, body").animate({scrollTop:e},t)}setTimeout(function(){var e="active",t=$(".words"),o=t.find("span").first();setInterval(function(){currentWord=t.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass(e),nextWord.length?nextWord.toggleClass(e):o.toggleClass(e)},4e3)},2500),setTimeout(function(){$(".preload").removeClass("preload")},500),$(".techs-slider").slick({autoplay:!0,infinite:!0,speed:150,slidesToShow:7,slidesToScroll:1,swipeToSlide:!0,touchThreshold:100,prevArrow:$(".techs .arrow.prev"),nextArrow:$(".techs .arrow.next"),responsive:[{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}}]}),$("#git-form").validate(),sr.reveal("section:not(.get-in-touch) .title"),sr.reveal(".introduction .pic"),sr.reveal(".projects .project")});