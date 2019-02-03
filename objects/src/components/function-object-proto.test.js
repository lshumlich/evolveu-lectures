import fo from "./function-object-proto";

test('Test the function-object code', () => {
	// console.log('Hello World from function-object');
	expect(fo.obj.name()).toBe("Larry Shumlich");
	expect(fo.obj.email()).toBe("Larry.Shumlich@email.ca");
	expect(fo.obj.initials()).toBe("LS");

	fo.obj.fname = 'Lorraine';
	expect(fo.obj.name()).toBe("Lorraine Shumlich");

	let user = new fo.User("John");
	expect(user.sayHi()).toBe("Hello John");

});
