import domFunc from './dom';

test('load a group card in the dom', () => {
    const groupCard = domFunc.makeGroupCard();
    domFunc.loadMainCard(groupCard);

    expect(getIdArray(groupCard))
        .toEqual(["idAdd", "1", "2", "3", "4"]);
});

test('insert before', () => {

    domFunc.count = 0;
    const groupCard = domFunc.makeGroupCard();
    domFunc.loadMainCard(groupCard);

    expect(getIdArray(groupCard)) // tested in the above test
        .toEqual(["idAdd", "1", "2", "3", "4"]);
    
    domFunc.onAddBefore(groupCard.childNodes[2]);

    expect(getIdArray(groupCard))
        .toEqual(["idAdd", "1", "5", "2", "3", "4"]);

});

test('insert after', () => {

    domFunc.count = 0;
    const groupCard = domFunc.makeGroupCard();
    domFunc.loadMainCard(groupCard);

    expect(getIdArray(groupCard)) // tested in the first test
        .toEqual(["idAdd", "1", "2", "3", "4"]);
    
    domFunc.onAddAfter(groupCard.childNodes[2]);

    expect(getIdArray(groupCard))
        .toEqual(["idAdd", "1", "2", "5",  "3", "4"]);

});

test('delete', () => {

    domFunc.count = 0;
    const groupCard = domFunc.makeGroupCard();
    domFunc.loadMainCard(groupCard);

    expect(getIdArray(groupCard)) // tested in the first test
        .toEqual(["idAdd", "1", "2", "3", "4"]);
    
    domFunc.onDelete(groupCard.childNodes[2]);

    expect(getIdArray(groupCard))
        .toEqual(["idAdd", "1", "3", "4"]);

});


const getIdArray = node => Array.from(node.childNodes).map(n => n.id);
