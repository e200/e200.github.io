window.e200 = (function(window) {

    var self = function e200(selector) {
        // Current el
        var el

        function init() {            
            recursiveResolve(document.body)
        }

        /**
         * Adds a listener to the current el.
         * 
         * @param string   event_name 
         * @param function callback 
         */
        function listener(event_name, callback) {
            this.addEventListener(event_name, callback, false)
        }

        function toggleClass(class_name) {
            if (el.classList.contains(class_name))
                el.classList.remove(class_name)
            else
                el.classList.add(class_name)
        }
    
        function recursiveResolve(node) {
            node.on = listener
            node.toggleClass = toggleClass

            var l = node.childElementCount

            if (l) {
                var childrens = node.children

                for (var i = 0; i < l; i++) {
                    recursiveResolve(childrens[i])
                }
            }
        }

        /**
         * Sets the main function that will
         * be loaded on window.onload
         */
        if (typeof selector == 'function') {
            window.onload = function () {
                init()
                selector()
            }

            return
        }
        
        if (typeof selector == 'object')
            el = selector

        /**
         * Quering the selector.
         * Preparing it to be used
         * with this library.
         */
        else if (typeof selector == 'string') {
            el = document.querySelectorAll(selector)
        }

        if (el.length === 1) {
            el = el[0]
        } else if(el.length > 1) {
            el.on = function (event_name, callback) {
                for (var i = 0; i < el.length; i++){
                    el[i].on = listener.bind(el[i], event_name, callback)

                    el[i].on()
                }
            }
        }

        return el
    }

    return self
})(window)