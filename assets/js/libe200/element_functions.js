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