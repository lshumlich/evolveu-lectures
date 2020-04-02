//
// npm test shapes -- -t plumb
//
import shapes from './shapes'

test('test plumbing', () => {
    console.log("Hello");
});
/*
    Concepts this shows
    - inheritance
    - extends
    - super
*/
test('test circle', () => {
    //
    // Create a shape and check it's x and y
    //
    const c = new shapes.Circle(5, 10);
    expect(c.x).toBe(5);
    expect(c.y).toBe(10);
    //
    // Move the shape and make sure it's x and y move
    //
    c.move(2, 4);
    expect(c.x).toBe(7);
    expect(c.y).toBe(14);
    //
    // get the element and make sure the svg attrabutes are correct
    //
    const el = c.getElement();
    expect(el.getAttribute("cx")).toBe("7");
    expect(el.getAttribute("cy")).toBe("14");
});

test('test drawing', () => {
    //
    // a Drawing represents a screen of shapes
    //
    const drawing = new shapes.Drawing(300, 300);
    //
    // We want to maintain a reference between the DOM shapes in the drawing
    // Interesting Note: The DOM object can also reference directly the shape in the drawing array
    //
    expect(drawing.nextKey()).toBe('k1');
    expect(drawing.nextKey()).toBe('k2');
    const key = drawing.createCircle(100, 100);
    expect(key).toBe('k3');
    const circle = drawing.getShape(key);
    const element = circle.getElement();
    expect(element.getAttribute('key')).toBe('k3');
    //
    // Create must handle strings
    //
    const skey = drawing.createCircle("100", "100");
    const sShape = drawing.getShape(skey);
    expect(sShape.x).toBe(100);
    expect(sShape.y).toBe(100);

    //
    // create the svg of the contents
    //
    const svg = drawing.draw();
    expect(svg.tagName).toBe('svg');
    expect(svg.children.length).toBe(2);
    //
    // once we've created the svg content new shapes must add themselves on creation
    //
    drawing.createCircle(200, 200);
    expect(svg.children.length).toBe(3);
    //
    // once we've created the svg content the move must also move
    // the element on the screen
    //
    // k3 is that circle
    const testMove = drawing.getShape(key);
    const testMoveEl = testMove.getElement();
    expect(testMove.x).toBe(100);
    expect(testMove.y).toBe(100);
    expect(testMoveEl.getAttribute('cx')).toBe("100");
    expect(testMoveEl.getAttribute('cy')).toBe("100");
    drawing.move(key, 3, 4);
    expect(testMove.x).toBe(103);
    expect(testMove.y).toBe(104);
    expect(testMoveEl.getAttribute('cx')).toBe("103");
    expect(testMoveEl.getAttribute('cy')).toBe("104");

    //
    // Make sure it can handle strings
    //
    drawing.move(key, "3", "4");
    expect(testMove.x).toBe(106);
    expect(testMove.y).toBe(108);
    //
    // if we move past the bounds reset to 1 or max
    //
    drawing.move(key, 1000, 1000);
    expect(testMove.x).toBe(1);
    expect(testMove.y).toBe(1);
    expect(testMoveEl.getAttribute('cx')).toBe("1");
    expect(testMoveEl.getAttribute('cy')).toBe("1");

    drawing.move(key, -1000, -1000);
    expect(testMove.x).toBe(drawing.width);
    expect(testMove.y).toBe(drawing.height);
    expect(testMoveEl.getAttribute('cx')).toBe(drawing.width.toString());
    expect(testMoveEl.getAttribute('cy')).toBe(drawing.height.toString());

    //
    // raise an error if I attempt to create a shape that is outside of the bounds of the
    // drawing
    //
    let editException;
    try{
        drawing.createCircle(1000, 5);
    } catch(ex) {
        editException = ex;
    }
    // console.log(editException);
    expect(editException.type).toBe('edit');
    expect(editException.msg).toMatch(/larger/);
    expect(editException.msg).toMatch(/1000/);
    
    editException = null;
    try{
        drawing.createCircle(5, 1000);
    } catch(ex) {
        editException = ex;
    }
    // console.log(editException);
    expect(editException.type).toBe('edit');
    expect(editException.msg).toMatch(/larger/);
    expect(editException.msg).toMatch(/1000/);
    
    editException = null;
    try{
        drawing.createCircle(-55, -1000);
    } catch(ex) {
        editException = ex;
    }

    // console.log(editException);
    expect(editException.type).toBe('edit');
    expect(editException.msg).toMatch(/-55/);
    expect(editException.msg).toMatch(/-1000/);

    // expect(badCircle).toThrowError(shapes.AppError);
    // expect(badCircle).toThrowError(/edit/);
    
    
    

});
