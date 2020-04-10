class AppError {
    constructor(type, msg) {
        this.type = type;
        this.msg = msg;
    }
}

class Shape {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
        this.key = 'k';
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    createElement(txt) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", txt);
        element.setAttribute('key', this.key);
        element.setAttribute("style", "fill:rgb(35, 35, 167)");
        this.element = element;
        return element;
    }
}

class Circle extends Shape {
    // 
    // The constructor could call the super or not
    // 
    getElement() {
        if (this.element) {
            return this.element;
        }
        const el = super.createElement('circle');
        this.setLocation();
        el.setAttribute("r", "50");
        return el;
    }
    setLocation() {
        this.element.setAttribute("cx", this.x);
        this.element.setAttribute("cy", this.y);
    }
    move(x, y) {
        super.move(Number(x), Number(y));
        if (this.element) {
            this.setLocation();
        }
    }
}

class Rectangle extends Shape {
    // 
    // The constructor could call the super or not
    // 
    getElement() {
        if (this.element) {
            return this.element;
        }
        const el = super.createElement('rect');
        el.setAttribute("width", "100");
        el.setAttribute("height", "50");
        this.setLocation();
        return el;
    }
    setLocation() {
        this.element.setAttribute("x", this.x);
        this.element.setAttribute("y", this.y);
    }
    move(x, y) {
        super.move(Number(x), Number(y));
        if (this.element) {
            this.setLocation();
        }
    }
}

class Square extends Rectangle {
    // 
    // The constructor could call the super or not
    // 
    getElement() {
        if (this.element) {
            return this.element;
        }
        const el = super.createElement('rect');
        el.setAttribute("width", "50");
        el.setAttribute("height", "50");
        this.setLocation();
        return el;
    }
}

class Drawing {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.shapes = {};
        this.shapeKey = 1;
    }

    nextKey() {
        return "k" + this.shapeKey++;
    }

    getShape(key) {
        return this.shapes[key];
    }

    createShape(shape) {
        if (shape.x > this.width) {
            throw new AppError(
                'edit',
                `The shape x ${shape.x} is larger than the width ${this.width}.`
            );
        }
        if (shape.y > this.height) {
            throw new AppError(
                'edit',
                `The shape y ${shape.y} is larger than the height ${this.height}.`
            );
        }
        if (shape.x < 0 || shape.y < 0) {
            throw new AppError(
                'edit',
                `The shape does not fit into the drawing ${shape.x},${shape.y}.`
            );
        }
        const key = this.nextKey();
        shape.key = key;
        this.shapes[key] = shape;
        if (this.svg) {
            this.svg.append(shape.getElement());
        }
        return key;
    }

    createCircle(x, y) {
        return this.createShape(new Circle(x, y));
    }

    createRectangle(x, y) {
        return this.createShape(new Rectangle(x, y));
    }

    createSquare(x, y) {
        return this.createShape(new Square(x, y));
    }

    draw() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // const svg = document.createElement("svg");
        svg.setAttribute("width", this.width);
        svg.setAttribute("height", this.height);
        svg.setAttribute("class", "clBox");
        // svg.className = 'clBox';
        for (let key in this.shapes) {
            svg.append(this.shapes[key].getElement());
        }
        this.svg = svg;
        // console.log(svg.children);

        return svg;
    }

    move(key, x, y) {
        const shape = this.getShape(key);
        shape.move(x, y);
        if (shape.x > this.width) {
            shape.x = 1;
            shape.setLocation();
        }
        if (shape.y > this.height) {
            shape.y = 1;
            shape.setLocation();
        }

        if (shape.x < 1) {
            shape.x = this.width;
            shape.setLocation();
        }

        if (shape.y < 1) {
            shape.y = this.height;
            shape.setLocation();
        }
    }

    async animate(key, x, y, cycle = 100, duration = 10) {
        let count = 0;
        const shape = this.getShape(key);

        let timerId = setInterval(() => {
            shape.move(x, y);
            count++;
        }, cycle);

        await new Promise((resolve, reject) =>
            setTimeout(() => {
                clearInterval(timerId);
                resolve("ok");
            }, duration * 1000));

        return count;
    }
}

function Hello() {
    return "hello";
}

// export default {hello};
export default { Hello, Circle, Rectangle, Square, Drawing, AppError };