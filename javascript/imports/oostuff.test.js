import * as oo from './oostuff.js';

test('just testing stuff', () => {
    console.log("Hello from oostuff.test.js", oo);
    // hello();
    oo.hello();
});


test('a class', () => {
    console.log("Hello from oostuff.test.js", oo);
    const p = new oo.Person("Larry", 5);
    oo.hello();
});
