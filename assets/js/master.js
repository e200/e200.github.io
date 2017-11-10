e200(function(){
    e200('.umburg').on('click', function(e){
        e.preventDefault()
    })
    //e200('.line').onClick(function(){
      //  alert()
    //})
})

// window.onload = function()
// {
//     $menuBtn = document.getElementsByClassName("umburg").item(0);

//     $menuBtn.onclick = function(b)
//     {
//         b.preventDefault();
        
//         $class="umburg-active";

//         if(!$menuBtn.classList.contains($class)) {
//             $menuBtn.classList.add($class)
//         }
//         else {
//             $menuBtn.classList.remove($class)
//         }
//     }

//     // Useful on minify.
//     var active_classname = 'active';

//     thing_i_love = document.querySelector('.things_i_love');

//     /**
//      * Toggle a class name in an element.
//      * 
//      * @param object el 
//      * @param string classname 
//      */
//     function toggleClass(el, classname)
//     {
//         if (el.classList.contains(classname))
//             el.classList.remove(classname)
//         else
//             el.classList.add(classname)
//     }

//     // Sets a delay for the transition start.
//     setTimeout(function(){
//         // Transition cycle.
//         setInterval(function(){
//             // Getting the current displayed thing i love.
//             currentThing = thing_i_love.querySelector('.active');
//             // Getting the next thing i love to be displayed.
//             nextThing = currentThing.nextSibling;

//             /**
//              * If nextThing is null, that means we're
//              * in the last thing i like.
//              * 
//              * So, we should restart the cycle from top
//              * to the bottom again.
//              * 
//              * Otherwise we just keep displaying one by other.
//              */
//             if (nextThing === null) {
//                 toggleClass(thing_i_love.firstChild, active_classname);
//                 toggleClass(thing_i_love.lastChild, active_classname);
//             } else {
//                 toggleClass(currentThing, active_classname);
//                 toggleClass(nextThing, active_classname);
//             }
//         }, 3000);
//     }, 3000);
// };
