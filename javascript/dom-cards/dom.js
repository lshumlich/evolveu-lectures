
const functions = {
    count: 0,

    makeGroupCard: x => {
        const div = document.createElement('div')
        div.className = "group-card";
        div.id = "idGroupCard";
		const add = document.createElement("button");
        add.textContent = "Add";
        add.id ="idAdd";
		div.appendChild(add);
        return div;
    },

    makeDiv: function(v) {
        this.count++;
        const div = document.createElement('div');
        div.id = this.count;
        div.className = "card";
        div.textContent = "Card " + this.count;
        div.lfsRef = "Larry Shumlich";
        const before = document.createElement("button");
		before.textContent = "Add Before";
		// before.addEventListener("click", this.onAddBefore);

		const after = document.createElement("button");
		after.textContent = "Add After";
		// after.addEventListener("click", this.onAddAfter);

		const del = document.createElement("button");
		del.textContent = "Delete";
		// del.addEventListener("click", this.onDelete);

		div.appendChild(document.createElement("br"));
		div.appendChild(document.createElement("br"));
		div.appendChild(before);
		// put a space between the before and after
		div.appendChild(document.createTextNode(" "));
		div.appendChild(after);
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createElement("br"));
		div.appendChild(del);

        return div;
    },

    loadMainCard: function (parent, d) {
        this.addNode(parent, this.makeDiv());
        this.addNode(parent, this.makeDiv());
        this.addNode(parent, this.makeDiv());
        this.addNode(parent, this.makeDiv());
        return parent;
    },

    onAddBefore: function (card) {
        const parent = card.parentElement;
		parent.insertBefore(this.makeDiv(),card);
    },

    onAddAfter: function (card) {
        card.parentElement.insertBefore(this.makeDiv(), card.nextSibling);
    },

    onDelete: function (card) {
        card.parentElement.removeChild(card);
    },

    addNode : function (p, n) {
        p.appendChild(n);
    },
    
}

export default functions;
