$(function(){$(".humburguer").on("click",function(e){e.preventDefault(),$("body").toggleClass("no-overflow"),$(".header").toggleClass("active")}),setTimeout(function(){var e=$(".words"),t=e.firstChild();setInterval(function(){currentWord=e.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass("active"),nextWord?nextWord.toggleClass("active"):t.toggleClass("active")},6e3)},5e3)});