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