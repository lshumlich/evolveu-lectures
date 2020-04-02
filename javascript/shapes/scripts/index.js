import shapes from './shapes.js'

const drawing = new shapes.Drawing(300, 300);
idDrawings.append(drawing.draw());

document.body.addEventListener("click", e => {
    try {
        const todo = e.target.getAttribute("todo");
        const key = e.target.getAttribute("key");

        if (todo === "newCircle") {
            if (!idx.value) {
                throw "x does not have a value";
            }
            if (!idy.value) {
                throw "y does not have a value";
            }
            drawing.createCircle(idx.value, idy.value);
        }

        if (todo === "hide") {
            idMsgBlock.style.display = "none"
        }

        if (key) {
            // drawing.move(key, idx.value, idy.value);
            let timerId = setInterval(() => {
                drawing.move(key, idx.value, idy.value);
            }, 100);
            setTimeout(() => { 
                clearInterval(timerId); 
            }, 5000);
        }

        if (todo === "error") {
            console.log("Make an error");
            todo.whatthe();
        }
    }
    catch (e) {

        console.log("************* WE HAVE A ERROR Mr. Spock *******");
        idMsgBlock.style.display = "block"
        if (e instanceof shapes.AppError) {
            idMsg.textContent = e.msg;
        } else {
            idMsg.textContent = e;
        }
    }
})


// console.log("Hello from Index v2");
// console.log(idsvg);

// const c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
// c.setAttribute("cx", "250");
// c.setAttribute("cy", "250");
// c.setAttribute("r", "40");
// c.setAttribute("key", "s1");

// idsvg.append(c);


// drawing.createCircle(100, 100);
// drawing.createCircle(200, 200);

// idDrawings.append(drawing.draw());
