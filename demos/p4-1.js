import * as clickMethods from "./p4-2.js"

var textDiv = document.getElementById("text");
textDiv.innerText = "some text"

textDiv.onmousedown = (ev) => {
    clickMethods.textMethod(ev, textDiv)
}
        
document.body.onmousedown = (ev) => {
    clickMethods.bodyMethod(ev, textDiv)
}