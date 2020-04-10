import shapes from './shapes.js'

const drawing = new shapes.Drawing(300, 300);
idDrawings.append(drawing.draw());

document.body.addEventListener("click", e => {
    try {
        const todo = e.target.getAttribute("todo");
        const key = e.target.getAttribute("key");

        if (todo === "newCircle") {
            validateInput();
            drawing.createCircle(idx.value, idy.value);
        }

        if (todo === "newRectangle") {
            validateInput();
            drawing.createRectangle(idx.value, idy.value);
        }

        if (todo === "newSquare") {
            validateInput();
            drawing.createSquare(idx.value, idy.value);
        }

        if (todo === "hide") {
            idMsgBlock.style.display = "none";
        }

        if (key) {
            let timerId = setInterval(() => {
                drawing.move(key, idx.value, idy.value);
            }, 100);
            setTimeout(() => { 
                clearInterval(timerId); 
            }, 10000);
        }

        // Create an error to show try catch
        if (todo === "error") {
            todo.thisDoesNotExist();
        }
    }

    catch (e) {
        idMsgBlock.style.display = "block"
        if (e instanceof shapes.AppError) {
            idMsg.textContent = e.msg;
        } else {
            idMsg.textContent = e;
        }
    }
})

function validateInput() {
    if (!idx.value) {
        throw "x does not have a value";
    }
    if (!idy.value) {
        throw "y does not have a value";
    }
}

idDrawings.addEventListener('mousedown',(e) => {
    console.log(e);
});
/*

--- 
console.log("Hello from Index v1");

document.body.addEventListener("click", e => {
    console.log("you clicked at", e);
}

    const el = e.target;
    console.log(el);
    console.log(el.getAttribute("key"));
    
    const el = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    el.setAttribute("x", "250");
    el.setAttribute("y", "250");
    el.setAttribute("width", "100");
    el.setAttribute("height", "50");
    el.setAttribute("key", "whatever");

    idsvg.append(el);


console.log(idsvg);

c.setAttribute("cx", "250");
c.setAttribute("cy", "250");
c.setAttribute("r", "40");
c.setAttribute("key", "s1");

idsvg.append(c);


drawing.createCircle(100, 100);
drawing.createCircle(200, 200);

idDrawings.append(drawing.draw());

*/
