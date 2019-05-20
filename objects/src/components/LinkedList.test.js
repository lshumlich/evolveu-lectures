import ll from "./LinkedList";

test('Test the basic LinkedList: ', () => {
	// console.log('Hello World');
	let llist = new ll.LinkedList();
	expect(llist.first()).toBeNull();
	expect(llist.last()).toBeNull();

	llist.add('First', 10.00);
	expect(llist.first().subject).toBe('First');
	expect(llist.last().subject).toBe('First');

	expect(llist.total()).toBe(10);

	llist.add('Second', 20.00);
	expect(llist.first().subject).toBe('First');
	expect(llist.next().subject).toBe('Second');
	expect(llist.next().subject).toBe('First');

	expect(llist.last().subject).toBe('Second');
	expect(llist.prev().subject).toBe('First');
	expect(llist.prev().subject).toBe('Second');

	expect(llist.total()).toBe(30);

	llist.add('Third', 30.00);
	expect(llist.prev().subject).toBe('Second');
	expect(llist.prev().subject).toBe('First');
	expect(llist.prev().subject).toBe('Third');

	expect(llist.next().subject).toBe('First');
	expect(llist.next().subject).toBe('Second');
	expect(llist.next().subject).toBe('Third');

	expect(llist.total()).toBe(60);

	expect(llist.prev().subject).toBe('Second');
	llist.delete();
	expect(llist.show()).toBe('Third - 30');

	expect(llist.prev().subject).toBe('First');
	expect(llist.next().subject).toBe('Third');

});
