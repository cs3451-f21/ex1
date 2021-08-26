// library source and docs at https://github.com/Qix-/color
import  Color  from 'color'

// create an interface so Typescript can do type checking for us
export interface MousePosition {
    x: number;
    y: number;
}

// simple convenience 
function randomColor() {
    return Color({
        r: Math.random() * 255, 
        g: Math.random() * 255, 
        b: Math.random() * 255
    })
}

// A class for our application state and functionality
class Drawing {
    // the constructor paramater "canv" is automatically created 
    // as a property because the parameter is marked "public" in the 
    // constructor parameter
    // canv: HTMLCanvasElement
    //
    // rendering context for the canvas, also public
    // ctx: CanvasRenderingContext2D

    mousePosition: MousePosition | null = null;

    // initial color we'll use for the canvas
    canvasColor = new Color("lightgrey")
    rectColor = new Color("black")

    // a simple wrapper to reliably get the offset within an DOM element
    // We need this because the mouse position in the mouse event is
    // relative to the Window, but we want to specify draw coordinates
    // relative to the canvas DOM element  
    // see: http://www.jacklmoore.com/notes/mouse-position/
    static offset(e: MouseEvent): MousePosition {
        e = e || <MouseEvent> window.event;

        var target = <Element> (e.target || e.srcElement),
            rect = target.getBoundingClientRect(),
            offsetX = e.clientX - rect.left,
            offsetY = e.clientY - rect.top;

        return {x: offsetX, y: offsetY};
    }

    // Web pages are reactive; Javascript is single threaded, and all 
    // javascript code in your page is executed in response to 
    // some action.   Actions include
    // - by the user (various callbacks like mouse and keyboard callback)
    // - by timers (we can use a timeout function to execute something in
    //   the future)
    // - things like network actions (e.g., fetch this resource, call this
    //   code when it's been retrieved)
    // - a callback synchronized with the next display refresh rate 
    //   that was created for doing animation
    // 
    // We use the this last one, triggered by a call to 
    //      requestAnimationFrame(() => this.render());
    // to do continuous rendering.  The requestAnimationFrame has one
    // parameter, a function.  The "() => this.render()" syntax is a 
    // shorthand for writing inline functions.  It says "this is a function
    // with no parameters" ("() =>") whose body is one line of code, the 
    // "this.render()" call.  It could also be
    //              requestAnimationFrame(() => {
    //                   this.render()
    //                });
    // where the function body is betwee {} and we could write more methods.

    render() {
        // Store the current drawing transformation matrix (and other state)
        this.ctx.save();
        
        // Use the identity matrix while clearing the canvas (just in case you change it someday!)
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.fillStyle = this.canvasColor.string();
        this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);
        
        // Restore the transform
        this.ctx.restore();                

        // draw a square under the mouse
        if (this.mousePosition) {
            this.ctx.fillStyle = this.rectColor.string();
            const m = this.mousePosition
            this.ctx.fillRect(m.x - 5, m.y - 5, 10, 10);
        }

        // do it again!  and again!  AND AGAIN!  AND ...       
        requestAnimationFrame(() => this.render());
    }
    
    constructor (public canv: HTMLCanvasElement, public ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
 
        canv.onmousedown = (ev: MouseEvent) => {
            // this method is called when a mouse button is pressed.
            var mousePosition = Drawing.offset(ev);   
            this.mousePosition = mousePosition
            this.rectColor = randomColor()
            this.canvasColor = randomColor()
        }
                
        canv.onmousemove = (ev: MouseEvent) => {
            // this method is called when the mouse moves.   
            const mouse = Drawing.offset(ev);
            this.mousePosition = mouse 
        }
        
        canv.onmouseout = (ev: MouseEvent) => {
            // this method is called when the mouse goes out of
            // the window.  
            this.mousePosition = null;
        }
    }
}

// a global variable for our state
var myDrawing: Drawing;


// main function, to keep things together and keep the variables created self contained
function exec() {
    // find our container
    var div = document.getElementById("drawing");

    if (!div) {
        console.warn("Your HTML page needs a DIV with id='drawing'")
        return;
    }

    // let's create a canvas and to draw in
    var canv = document.createElement("canvas");
    let ctx = canv.getContext("2d");
    if (!ctx) {
        console.warn("our drawing element does not have a 2d drawing context")
        return
    }
    
    div.appendChild(canv);

    canv.id = "main";
    canv.style.width = "100%";
    canv.style.height = "100%";
    canv.width  = canv.offsetWidth;
    canv.height = canv.offsetHeight;

    window.addEventListener('resize', (event) => {
        canv.width  = canv.offsetWidth;
        canv.height = canv.offsetHeight;
    });
    

    // create a Drawing object
    myDrawing = new Drawing(canv, ctx);
    
    // kick off the rendering!
    myDrawing.render(); 
}

exec()