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
        this.setLocation(
            this.x += x,
            this.y += y
        );
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    create(txt) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", txt);
        element.setAttribute('key', this.key);
        this.element = element;
        return element;
    }
}

class Circle extends Shape {
    //
    // 
    //
    // constructor(x, y) {
    //     super(x, y);
    // }

    getElement() {
        if (this.element) {
            return this.element;
        }
        // const el = this.create('circle');
        const el = super.create('circle');
        this.setLocation();
        el.setAttribute("r", "50");
        return el;
    }
    setLocation() {
        // console.log(`setLocation ${this.x},${this.y}`);
        
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
            // console.log(`The shape x ${shape.x} is larger than the width ${this.width}.`);
            // throw `The shape x ${shape.x} is larger than the width ${this.width}.`;
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
        shape.move(x,y);
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
        // shape.x += x;
        // shape.y += y;
    }
}

export default { Circle, Drawing, AppError };