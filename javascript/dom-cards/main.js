import func from './dom.js';

const groupCard = func.makeGroupCard();
func.loadMainCard(groupCard);

groupCard.addEventListener("click", e => {
    // console.log(e.target);
    // console.log(e.target.textContent);
    const card = e.target.parentElement; // target is the button
    switch (e.target.textContent) {
        case "Add":
            func.addNode(card, func.makeDiv());
            break;
        case "Add Before":
            func.onAddBefore(card);
            break;
        case "Add After":
            func.onAddAfter(card);
            break;
        case "Delete":
            func.onDelete(card);
            break;
    }
});


window.onload = () => {
    document.body.appendChild(groupCard);
};
