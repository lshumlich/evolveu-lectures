
import fetchFunc from './index';
import functions from './index';
const fetch = require('node-fetch');

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


test('Test json data', done => {
    console.log('Hello World');
    showTime();
    test3(done);
    // fetchFunc.getUsers();
    // fetchFunc.show(data);
    // fetchFunc.showNames();
    // fetchFunc.fetch();
    // fetchFunc.test2();
    // expect(getIdArray(groupCard))
    //     .toEqual(["idAdd", "1", "2", "3", "4"]);
});


async function test3(done) {
    try {
        const response = await fetch(functions.url);
        const json = await response.json();
        console.log('Success:', await json);
        done()
    } catch (error) {
        console.error('Error:', error);
        done()
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
