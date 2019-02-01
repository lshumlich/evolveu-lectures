import ll from "./LinkedList";

test('Test the basic LinkedList: ', () => {
	console.log('Hello World');
	let llist = new ll.LinkedList('First', 10.00);
	expect(llist.head.subject).toBe('First');
	expect(llist.head.amount).toBe(10.00);
	expect(llist.show()).toBe('First: 10,');

	llist.add('Second', 20.00);
	expect(llist.head.forwardNode.subject).toBe('Second');
	expect(llist.head.forwardNode.amount).toBe(20.00);
	expect(llist.show()).toBe('First: 10,Second: 20,');


	// expect(lfs.add(1,2)).toBe(3);
});
