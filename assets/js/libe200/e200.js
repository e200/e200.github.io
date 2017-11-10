window.e200 = (function(window){
    
    var el = null

    var self = function e200(selector) {
        
        if (typeof selector == 'function')
            window.onload = selector
        else if (typeof selector == 'string') {
            el = window.document.querySelectorAll(selector)

            initElement()

            return el
        }
    }

    function initElement() {
        var l = el.length;
        
        if (l == 1) {
            el = el.item(0)

            el.on = listener
        } else if (l > 1) {
            el.forEach(function(elms) {
                elms.on = listener
            });
        }
    }

    function listener(event_name, callback)
    {
        console.log(el)
        el.addEventListener(event_name, callback)
    }

    //self.alert = function(){
        //console.log(this)
    //}

    return self
})(window)