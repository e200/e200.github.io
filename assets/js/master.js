window.sr=ScrollReveal({viewFactor:.3}),$(function(){$(".humburguer").on("click",function(e){e.preventDefault(),$(".header").toggleClass("active")}),setTimeout(function(){var e=$(".words"),t=e.firstChild();setInterval(function(){currentWord=e.find(".active"),nextWord=currentWord.next(),currentWord.toggleClass("active"),nextWord?nextWord.toggleClass("active"):t.toggleClass("active")},4e3)},3e3),setTimeout(function(){$(".preload").removeClass("preload")},500),$("#btn-ttm").on("click",function(){var e=$(this).elements[0],t=$("#get-in-touch-form").elements[0],n=new FormData($("#get-in-touch-form").elements[0]);e.innerHTML='<div class="spinner">                                            <div class="bounce1"></div>                                            <div class="bounce2"></div>                                            <div class="bounce3"></div>                                        </div>';var r=new XMLHttpRequest;r.open("post","https://ancient-escarpment-86494.herokuapp.com/",!0),r.onreadystatechange=function(){if(4==this.readyState&&200==this.status)if("1"===this.responseText){for(var n=0;n<t.elements.length;n++)t.elements[n].readOnly=!0;e.innerText="Successful"}else e.innerText="Error! Retry?"},r.send(n)}),sr.reveal(".section .title"),sr.reveal("#intro .pic"),sr.reveal("#projects .project"),sr.reveal("#techs .tech")});