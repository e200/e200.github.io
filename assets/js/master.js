/**
 * Adds a listener for the `event_name`.
 * 
 * @param string   event_name 
 * @param function callback 
 */
function listener(event_name, callback) {
    this.addEventListener(event_name, callback, false)
}

/**
 * Toggles a class name
 * 
 * @param string class_name 
 */
function toggleClass(class_name) {
    if (this.classList.contains(class_name))
        this.classList.remove(class_name)
    else
        this.classList.add(class_name)
}

/**
 * Finds childs using a selector
 * 
 * @param string selector 
 */
function find(selector) {
    el = this.querySelectorAll(selector)
    
    if (el.length === 1)
        el = el[0]
    else if(el.length > 1) {
        el.on = function (event_name, callback) {
            for (var i = 0; i < el.length; i++){
                el[i].on = listener.bind(el[i], event_name, callback)

                el[i].on()
            }
        }
        el.toggleClass = function (class_name) {
            for (var i = 0; i < el.length; i++){
                toggleClass = toggleClass.bind(el[i], class_name)

                toggleClass()
            }
        }
        el.find = function (selector) {
            for (var i = 0; i < el.length; i++){
                el[i].find = find.bind(el[i], selector)

                el[i].find()
            }
        }
    }

    return el
}
// Sets elements functions
// recursively
function setElementFunctionsRecursively(element) {
    element.on = listener
    element.toggleClass = toggleClass
    element.find = find

    var l = element.childElementCount

    if (l) {
        var childrens = element.children

        for (var i = 0; i < l; i++) {
            setElementFunctionsRecursively(childrens[i])
        }
    }
}

// Adds common DOM functions to the Body
// and do the same recursively with each
// child
function bootstrapper() {      
    setElementFunctionsRecursively(document.body)
}

window.e200 = (function(window) {

    var self = function e200(selector) {
        /**
         * Sets the main function that will
         * be loaded on window.onload
         */
        if (typeof selector == 'function') {
            window.onload = function () {
                // Initialize all elements
                bootstrapper()

                // Invoke the start function
                selector()
            }

            return
        }

        /**
         * Quering the selector.
         */
        else if (typeof selector == 'object')
            el = selector

        /**
         * Quering the selector.
         */
        else if (typeof selector == 'string')
        {
            el = document.body.find(selector)
        }

        return el
    }

    return self
})(window)
e200(function(){
    e200('.umburg').on('click', function(e){
       e.preventDefault()

       this.toggleClass('umburg-active')
    })

    // Sets a delay for start the transition.
    setTimeout(function(){
        var words = e200('.words')

        // Transition cycle.
        setInterval(function(){
            
            // Getting the current word.
            currentWord = words.find('.active');

            // Getting the next word to be displayed.
            nextWord = currentWord.nextSibling;

            /**
             * If nextWord is null, that means we're
             * in the last word.
             * 
             * So, we should restart the cycle from top
             * to the bottom again.
             * 
             * Otherwise we just keep displaying one by other.
             */
            if (nextWord === null) {
                words.firstChild.toggleClass(active_classname);
                words.lastChild.toggleClass(active_classname);
            } else {
                currentWord.toggleClass(active_classname);
                nextWord.toggleClass(active_classname);
            }
        }, 3000);
    }, 3000);
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRfZnVuY3Rpb25zLmpzIiwic2V0X2Z1bmN0aW9uc19yZWN1cnNpdmVseS5qcyIsImJvb3RzdHJhcHBlci5qcyIsImUyMDAuanMiLCJlMjAwLmdpdGh1Yi5pby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFkZHMgYSBsaXN0ZW5lciBmb3IgdGhlIGBldmVudF9uYW1lYC5cbiAqIFxuICogQHBhcmFtIHN0cmluZyAgIGV2ZW50X25hbWUgXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2sgXG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50X25hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBmYWxzZSlcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGEgY2xhc3MgbmFtZVxuICogXG4gKiBAcGFyYW0gc3RyaW5nIGNsYXNzX25hbWUgXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzX25hbWUpIHtcbiAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NfbmFtZSkpXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc19uYW1lKVxuICAgIGVsc2VcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUpXG59XG5cbi8qKlxuICogRmluZHMgY2hpbGRzIHVzaW5nIGEgc2VsZWN0b3JcbiAqIFxuICogQHBhcmFtIHN0cmluZyBzZWxlY3RvciBcbiAqL1xuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICAgIGVsID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIFxuICAgIGlmIChlbC5sZW5ndGggPT09IDEpXG4gICAgICAgIGVsID0gZWxbMF1cbiAgICBlbHNlIGlmKGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWwub24gPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGVsW2ldLm9uID0gbGlzdGVuZXIuYmluZChlbFtpXSwgZXZlbnRfbmFtZSwgY2FsbGJhY2spXG5cbiAgICAgICAgICAgICAgICBlbFtpXS5vbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NfbmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MgPSB0b2dnbGVDbGFzcy5iaW5kKGVsW2ldLCBjbGFzc19uYW1lKVxuXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGVsW2ldLmZpbmQgPSBmaW5kLmJpbmQoZWxbaV0sIHNlbGVjdG9yKVxuXG4gICAgICAgICAgICAgICAgZWxbaV0uZmluZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxcbn0iLCIvLyBTZXRzIGVsZW1lbnRzIGZ1bmN0aW9uc1xuLy8gcmVjdXJzaXZlbHlcbmZ1bmN0aW9uIHNldEVsZW1lbnRGdW5jdGlvbnNSZWN1cnNpdmVseShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5vbiA9IGxpc3RlbmVyXG4gICAgZWxlbWVudC50b2dnbGVDbGFzcyA9IHRvZ2dsZUNsYXNzXG4gICAgZWxlbWVudC5maW5kID0gZmluZFxuXG4gICAgdmFyIGwgPSBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50XG5cbiAgICBpZiAobCkge1xuICAgICAgICB2YXIgY2hpbGRyZW5zID0gZWxlbWVudC5jaGlsZHJlblxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRFbGVtZW50RnVuY3Rpb25zUmVjdXJzaXZlbHkoY2hpbGRyZW5zW2ldKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQWRkcyBjb21tb24gRE9NIGZ1bmN0aW9ucyB0byB0aGUgQm9keVxuLy8gYW5kIGRvIHRoZSBzYW1lIHJlY3Vyc2l2ZWx5IHdpdGggZWFjaFxuLy8gY2hpbGRcbmZ1bmN0aW9uIGJvb3RzdHJhcHBlcigpIHsgICAgICBcbiAgICBzZXRFbGVtZW50RnVuY3Rpb25zUmVjdXJzaXZlbHkoZG9jdW1lbnQuYm9keSlcbn1cbiIsIndpbmRvdy5lMjAwID0gKGZ1bmN0aW9uKHdpbmRvdykge1xuXG4gICAgdmFyIHNlbGYgPSBmdW5jdGlvbiBlMjAwKHNlbGVjdG9yKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBtYWluIGZ1bmN0aW9uIHRoYXQgd2lsbFxuICAgICAgICAgKiBiZSBsb2FkZWQgb24gd2luZG93Lm9ubG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgYWxsIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwcGVyKClcblxuICAgICAgICAgICAgICAgIC8vIEludm9rZSB0aGUgc3RhcnQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBzZWxlY3RvcigpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFF1ZXJpbmcgdGhlIHNlbGVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICAgICAgZWwgPSBzZWxlY3RvclxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBRdWVyaW5nIHRoZSBzZWxlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJylcbiAgICAgICAge1xuICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5ib2R5LmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZlxufSkod2luZG93KSIsImUyMDAoZnVuY3Rpb24oKXtcbiAgICBlMjAwKCcudW1idXJnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKCd1bWJ1cmctYWN0aXZlJylcbiAgICB9KVxuXG4gICAgLy8gU2V0cyBhIGRlbGF5IGZvciBzdGFydCB0aGUgdHJhbnNpdGlvbi5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3b3JkcyA9IGUyMDAoJy53b3JkcycpXG5cbiAgICAgICAgLy8gVHJhbnNpdGlvbiBjeWNsZS5cbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2V0dGluZyB0aGUgY3VycmVudCB3b3JkLlxuICAgICAgICAgICAgY3VycmVudFdvcmQgPSB3b3Jkcy5maW5kKCcuYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIEdldHRpbmcgdGhlIG5leHQgd29yZCB0byBiZSBkaXNwbGF5ZWQuXG4gICAgICAgICAgICBuZXh0V29yZCA9IGN1cnJlbnRXb3JkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIG5leHRXb3JkIGlzIG51bGwsIHRoYXQgbWVhbnMgd2UncmVcbiAgICAgICAgICAgICAqIGluIHRoZSBsYXN0IHdvcmQuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIFNvLCB3ZSBzaG91bGQgcmVzdGFydCB0aGUgY3ljbGUgZnJvbSB0b3BcbiAgICAgICAgICAgICAqIHRvIHRoZSBib3R0b20gYWdhaW4uXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSB3ZSBqdXN0IGtlZXAgZGlzcGxheWluZyBvbmUgYnkgb3RoZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChuZXh0V29yZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdvcmRzLmZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoYWN0aXZlX2NsYXNzbmFtZSk7XG4gICAgICAgICAgICAgICAgd29yZHMubGFzdENoaWxkLnRvZ2dsZUNsYXNzKGFjdGl2ZV9jbGFzc25hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V29yZC50b2dnbGVDbGFzcyhhY3RpdmVfY2xhc3NuYW1lKTtcbiAgICAgICAgICAgICAgICBuZXh0V29yZC50b2dnbGVDbGFzcyhhY3RpdmVfY2xhc3NuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfSwgMzAwMCk7XG59KSJdfQ==
