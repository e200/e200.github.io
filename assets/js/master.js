window.sr=ScrollReveal({viewFactor:.3}),$(function(){$(".humburguer").on("click",function(e){e.preventDefault(),$(".header").toggleClass("active")}),$("#scroll-to-intro").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".intro").offset().top},600)}),setTimeout(function(){var e="active",o=$("#words"),t=o.first();setInterval(function(){currentWord=o.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass(e),nextWord?nextWord.toggleClass(e):t.toggleClass(e)},4e3)},3e3),setTimeout(function(){$(".preload").removeClass("preload")},500),$(".techs-slider").slick({autoplay:!0,infinite:!0,speed:300,slidesToShow:7,slidesToScroll:1,swipeToSlide:!0,touchThreshold:100,prevArrow:$(".slick-arrow-prev"),nextArrow:$(".slick-arrow-next"),responsive:[{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}}]}),$(window).on("scroll",function(e){e.preventDefault()}),sr.reveal("section .title"),sr.reveal(".intro .pic"),sr.reveal(".projects .project")});
