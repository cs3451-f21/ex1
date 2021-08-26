var textDiv = document.getElementById("text")!;
textDiv.innerText = "some text"

textDiv.onmousedown = (ev) => {
    // this method is called when a mouse button is pressed.
    textDiv.innerText = "some OTHER text"
    ev.stopPropagation()
}
        
document.body.onmousedown = (ev) => {
    // this method is called when a mouse button is pressed.
    textDiv.innerText = "back to some text"
}