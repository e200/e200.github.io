window.sr=ScrollReveal({viewFactor:.3}),$(function(){$(".humburguer").on("click",function(e){e.preventDefault(),$(".header").toggleClass("active")}),setTimeout(function(){var e="active",r=$(".words"),t=r.firstChild();setInterval(function(){currentWord=r.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass(e),nextWord?nextWord.toggleClass(e):t.toggleClass(e)},4e3)},3e3),setTimeout(function(){$(".preload").removeClass("preload")},500),sr.reveal(".section .title"),sr.reveal("#intro .pic"),sr.reveal("#projects .project"),sr.reveal("#techs .tech")});