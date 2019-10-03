
import fetchFunc from './index';

// import 'whatwg-fetch'

const data =    [
        { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" },
        { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" },
        { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" },
        { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" },
        { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" },
        { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" },
        { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" },
        { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" },
        { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" },
        { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
    ];


test('Test json data', () => {
    console.log('Hello World');
    showTime();
    // fetchFunc.getUsers();
    // fetchFunc.show(data);
    // fetchFunc.showNames();
    // fetchFunc.fetch();
    // fetchFunc.test2();
    // test3();
    // expect(getIdArray(groupCard))
    //     .toEqual(["idAdd", "1", "2", "3", "4"]);
});


async function test3() {
    try {
        const response = await windows.fetch(functions.url);
        const json = await response.json();
        console.log('Success:', json);
    } catch (error) {
        console.error('Error:', error);
    }
}

function showTime() {
    console.log('One');
    setTimeout(function(){
        console.log("THIS IS");
    }, 2000);
    console.log('Two');
    console.log('Three');
}
