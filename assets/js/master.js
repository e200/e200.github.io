window.sr=ScrollReveal({viewFactor:.3}),$(function(){var e=$(".btt"),t=$(".presentation");$(".humburguer").on("click",function(e){e.preventDefault(),$(".header").toggleClass("active")}),$(".btt").on("click",function(e){e.preventDefault(),n(0)}),$("#scroll-to-intro").on("click",function(e){e.preventDefault(),n(".intro")}),$("#btn-ttm").on("click",function(){var e=$(this);e.html('<div class="spinner">                            <div class="bounce1"></div>                            <div class="bounce2"></div>                            <div class="bounce3"></div>                      </div>'),setTimeout(function(){e.html("Successfully!")},5e3)});var o,i,s=0;$(window).on("scroll",function(){s=o,(o=$(this).scrollTop())<s&&t.height()<o?(e.fadeIn(300),i&&clearInterval(i),i=setTimeout(function(){e.fadeOut(300)},3e3)):e.fadeOut(300)});function n(e,t){t||(t=600),"string"==typeof e&&(e=$(e).offset().top),$("html, body").animate({scrollTop:e},t)}setTimeout(function(){var e="active",t=$(".words"),o=t.first();setInterval(function(){currentWord=t.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass(e),nextWord.length?nextWord.toggleClass(e):o.toggleClass(e)},4e3)},2500),setTimeout(function(){$(".preload").removeClass("preload")},500),$(".techs-slider").slick({autoplay:!0,infinite:!0,speed:150,slidesToShow:7,slidesToScroll:1,swipeToSlide:!0,touchThreshold:100,prevArrow:$(".techs .arrow.prev"),nextArrow:$(".techs .arrow.next"),responsive:[{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}}]}),sr.reveal("section:not(.git) .title"),sr.reveal(".intro .pic"),sr.reveal(".projects .project")});