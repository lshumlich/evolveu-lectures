import mainFunc from './main';

test('clicking all the buttons', () => {
    window.onload();
    const twoCard = document.getElementById("2")
    twoCard.childNodes.forEach(n => {
        if (n.type === "submit") n.click();
    });
    document.getElementById("idAdd").click();
});
