$(function(){$(".humburguer").on("click",function(t){t.preventDefault(),$(this).toggleClass("active")}),setTimeout(function(){var t=$(".words"),e=t.firstChild();setInterval(function(){currentWord=t.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass("active"),nextWord?nextWord.toggleClass("active"):e.toggleClass("active")},4e3)},6e3)});