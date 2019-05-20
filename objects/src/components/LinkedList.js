
class Node {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.nextNode = null;
		this.prevNode = null;
	}
}

class LinkedList {
	constructor() {
		const node = new Node(null, null);
		node.nextNode = node;
		node.prevNode = node;
		this.baseNode = node;

		this.current = node;
	}

	first() {
		this.current = this.baseNode.nextNode;
		return this.baseNode === this.baseNode.nextNode ? null : this.baseNode.nextNode;
	}

	next() {
		return this.current = this.current.nextNode.subject === null ? this.current.nextNode.nextNode : this.current.nextNode;
	}

	last() {
		this.current = this.baseNode.prevNode;
		return this.baseNode === this.baseNode.prevNode ? null : this.baseNode.prevNode;
	}

	prev() {
		return this.current = this.current.prevNode.subject === null ? this.current.prevNode.prevNode : this.current.prevNode;
	}

	add(subject, amount) {
		const node = new Node(subject, amount);

		node.nextNode = this.current.nextNode;
		node.prevNode = this.current;

		node.prevNode.nextNode = node;
		node.nextNode.prevNode = node;

		return this.current = node;
	}

	total() {
		let sum = 0;
		let i = this.baseNode.nextNode;
		do {
			sum += i.amount;
			i = i.nextNode;
		} while(i !== this.baseNode.nextNode);
		return sum;
	}

	delete() {
		this.current.prevNode.nextNode = this.current.nextNode;
		this.current.nextNode.prevNode = this.current.prevNode;
		return this.current = this.current.nextNode;
	}

	show() {
		return `${this.current.subject} - ${this.current.amount}`;
	}
}

export default { LinkedList };
