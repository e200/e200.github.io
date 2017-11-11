// Adds common DOM functions to the Body
// and do the same recursively with each
// child
function bootstrapper() {      
    setElementFunctionsRecursively(document.body)
}
