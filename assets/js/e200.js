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
        var
            active_class_name = 'active',
            words = e200('.words')

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
                words.firstChild.toggleClass(active_class_name);
                words.lastChild.toggleClass(active_class_name);
            } else {
                currentWord.toggleClass(active_class_name);
                nextWord.toggleClass(active_class_name);
            }
        }, 3000);
    }, 3000);
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRfZnVuY3Rpb25zLmpzIiwic2V0X2Z1bmN0aW9uc19yZWN1cnNpdmVseS5qcyIsImJvb3RzdHJhcHBlci5qcyIsImUyMDAuanMiLCJlMjAwLmdpdGh1Yi5pby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZTIwMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWRkcyBhIGxpc3RlbmVyIGZvciB0aGUgYGV2ZW50X25hbWVgLlxuICogXG4gKiBAcGFyYW0gc3RyaW5nICAgZXZlbnRfbmFtZSBcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFjayBcbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnRfbmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGZhbHNlKVxufVxuXG4vKipcbiAqIFRvZ2dsZXMgYSBjbGFzcyBuYW1lXG4gKiBcbiAqIEBwYXJhbSBzdHJpbmcgY2xhc3NfbmFtZSBcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NfbmFtZSkge1xuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc19uYW1lKSlcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzX25hbWUpXG4gICAgZWxzZVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NfbmFtZSlcbn1cblxuLyoqXG4gKiBGaW5kcyBjaGlsZHMgdXNpbmcgYSBzZWxlY3RvclxuICogXG4gKiBAcGFyYW0gc3RyaW5nIHNlbGVjdG9yIFxuICovXG5mdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgZWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgXG4gICAgaWYgKGVsLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgZWwgPSBlbFswXVxuICAgIGVsc2UgaWYoZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBlbC5vbiA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZWxbaV0ub24gPSBsaXN0ZW5lci5iaW5kKGVsW2ldLCBldmVudF9uYW1lLCBjYWxsYmFjaylcblxuICAgICAgICAgICAgICAgIGVsW2ldLm9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc19uYW1lKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyA9IHRvZ2dsZUNsYXNzLmJpbmQoZWxbaV0sIGNsYXNzX25hbWUpXG5cbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwuZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZWxbaV0uZmluZCA9IGZpbmQuYmluZChlbFtpXSwgc2VsZWN0b3IpXG5cbiAgICAgICAgICAgICAgICBlbFtpXS5maW5kKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbFxufSIsIi8vIFNldHMgZWxlbWVudHMgZnVuY3Rpb25zXG4vLyByZWN1cnNpdmVseVxuZnVuY3Rpb24gc2V0RWxlbWVudEZ1bmN0aW9uc1JlY3Vyc2l2ZWx5KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50Lm9uID0gbGlzdGVuZXJcbiAgICBlbGVtZW50LnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3NcbiAgICBlbGVtZW50LmZpbmQgPSBmaW5kXG5cbiAgICB2YXIgbCA9IGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnRcblxuICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbnMgPSBlbGVtZW50LmNoaWxkcmVuXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHNldEVsZW1lbnRGdW5jdGlvbnNSZWN1cnNpdmVseShjaGlsZHJlbnNbaV0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBBZGRzIGNvbW1vbiBET00gZnVuY3Rpb25zIHRvIHRoZSBCb2R5XG4vLyBhbmQgZG8gdGhlIHNhbWUgcmVjdXJzaXZlbHkgd2l0aCBlYWNoXG4vLyBjaGlsZFxuZnVuY3Rpb24gYm9vdHN0cmFwcGVyKCkgeyAgICAgIFxuICAgIHNldEVsZW1lbnRGdW5jdGlvbnNSZWN1cnNpdmVseShkb2N1bWVudC5ib2R5KVxufVxuIiwid2luZG93LmUyMDAgPSAoZnVuY3Rpb24od2luZG93KSB7XG5cbiAgICB2YXIgc2VsZiA9IGZ1bmN0aW9uIGUyMDAoc2VsZWN0b3IpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIG1haW4gZnVuY3Rpb24gdGhhdCB3aWxsXG4gICAgICAgICAqIGJlIGxvYWRlZCBvbiB3aW5kb3cub25sb2FkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhbGwgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBib290c3RyYXBwZXIoKVxuXG4gICAgICAgICAgICAgICAgLy8gSW52b2tlIHRoZSBzdGFydCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIHNlbGVjdG9yKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUXVlcmluZyB0aGUgc2VsZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ29iamVjdCcpXG4gICAgICAgICAgICBlbCA9IHNlbGVjdG9yXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFF1ZXJpbmcgdGhlIHNlbGVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnKVxuICAgICAgICB7XG4gICAgICAgICAgICBlbCA9IGRvY3VtZW50LmJvZHkuZmluZChzZWxlY3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cblxuICAgIHJldHVybiBzZWxmXG59KSh3aW5kb3cpIiwiZTIwMChmdW5jdGlvbigpe1xuICAgIGUyMDAoJy51bWJ1cmcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ3VtYnVyZy1hY3RpdmUnKVxuICAgIH0pXG5cbiAgICAvLyBTZXRzIGEgZGVsYXkgZm9yIHN0YXJ0IHRoZSB0cmFuc2l0aW9uLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyXG4gICAgICAgICAgICBhY3RpdmVfY2xhc3NfbmFtZSA9ICdhY3RpdmUnLFxuICAgICAgICAgICAgd29yZHMgPSBlMjAwKCcud29yZHMnKVxuXG4gICAgICAgIC8vIFRyYW5zaXRpb24gY3ljbGUuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldHRpbmcgdGhlIGN1cnJlbnQgd29yZC5cbiAgICAgICAgICAgIGN1cnJlbnRXb3JkID0gd29yZHMuZmluZCgnLmFjdGl2ZScpO1xuXG4gICAgICAgICAgICAvLyBHZXR0aW5nIHRoZSBuZXh0IHdvcmQgdG8gYmUgZGlzcGxheWVkLlxuICAgICAgICAgICAgbmV4dFdvcmQgPSBjdXJyZW50V29yZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBuZXh0V29yZCBpcyBudWxsLCB0aGF0IG1lYW5zIHdlJ3JlXG4gICAgICAgICAgICAgKiBpbiB0aGUgbGFzdCB3b3JkLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBTbywgd2Ugc2hvdWxkIHJlc3RhcnQgdGhlIGN5Y2xlIGZyb20gdG9wXG4gICAgICAgICAgICAgKiB0byB0aGUgYm90dG9tIGFnYWluLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBPdGhlcndpc2Ugd2UganVzdCBrZWVwIGRpc3BsYXlpbmcgb25lIGJ5IG90aGVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobmV4dFdvcmQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3b3Jkcy5maXJzdENoaWxkLnRvZ2dsZUNsYXNzKGFjdGl2ZV9jbGFzc19uYW1lKTtcbiAgICAgICAgICAgICAgICB3b3Jkcy5sYXN0Q2hpbGQudG9nZ2xlQ2xhc3MoYWN0aXZlX2NsYXNzX25hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V29yZC50b2dnbGVDbGFzcyhhY3RpdmVfY2xhc3NfbmFtZSk7XG4gICAgICAgICAgICAgICAgbmV4dFdvcmQudG9nZ2xlQ2xhc3MoYWN0aXZlX2NsYXNzX25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9LCAzMDAwKTtcbn0pIl19
