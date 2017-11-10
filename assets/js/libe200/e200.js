window.e200 = (function(window) {

    function init() {
        /**
         * Adds a listener to the current el.
         * 
         * @param string   event_name 
         * @param function callback 
         */
        function listener(event_name, callback) {
            el.addEventListener(event_name, callback, false)
        }

        function toggleClass(class_name) {
            if (el.classList.contains(class_name))
                el.classList.remove(class_name)
            else
                el.classList.add(class_name)
        }
    
        function recursiveResolve(node) {
            console.log(node)
            if (typeof node != 'undefined') {
                node.on = listener
                node.toggleClass = toggleClass
    
                var l = node.childElementCount

                if (l) {
                    childrens = node.children
    
                    for (var i = 0; i < l; i++) {
                        recursiveResolve(childrens[i])
                    }
                }
            }
        }
        
        recursiveResolve(document.body)

        //console.log(document.querySelectorAll('.line'))
    }

    window.onload = init    

    var self = function e200(selector) {
        // Current el
        var el

        /**
         * Sets the main function that will
         * be loaded on window.onload
         */
        if (typeof selector == 'function') {
            //document.onload = selector

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

        return el
    }

    return self
})(window)