function textMethod(ev, div) {
    // this method is called when a mouse button is pressed.
    div.innerText = "some OTHER text"
    ev.stopPropagation()
}
        
function bodyMethod (ev, div) {
    // this method is called when a mouse button is pressed.
    div.innerText = "back to some text"
}

export {textMethod, bodyMethod}