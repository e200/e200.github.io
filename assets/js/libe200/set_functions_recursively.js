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
