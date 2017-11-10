window.e200 = (function(window){
    
    var elements = null

    var self = function e200(selector) {
        
        if (typeof selector == 'function')
            window.onload = selector
        else if (typeof selector == 'string') {
            elements = window.document.querySelectorAll(selector)

            return initElements(elements)
        }
    }

    function initElements(elements) {
        var l = elements.length;
        
        if (l == 1) {
            elements = elements.item(0)

            elements.on = listener
        } else if (l > 1) {
            elements.forEach(function(element) {
                //element.onClick = onClick
                console.log(element)
            });
        }
        
        return elements
    }

    function listener(event_name, callback)
    {
        console.log(elements)
        elements.addEventListener(event_name, callback)
    }

    //self.alert = function(){
        //console.log(this)
    //}

    return self
})(window)