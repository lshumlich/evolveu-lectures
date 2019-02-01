

class Node {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.forwardNode = null;
	}
}

class LinkedList {
	constructor(subject, amount) {
		this.head = new Node(subject, amount);
	}

	add(subject, amount) {
		let n = this.head;
		while(n.forwardNode) {
			n = n.forwardNode;
		}
		n.forwardNode = new Node(subject, amount);
	}

	show() {
		let n = this.head;
		let s = '';
		while(n) {
			s += n.subject + ': ' + n.amount + ',';
			n = n.forwardNode;
		}
		return s;
	}
}

export default { LinkedList };
