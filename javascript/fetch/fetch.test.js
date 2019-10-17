
import fetchFunc from './fetch';
global.fetch = require('node-fetch');

const data = [
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
    expect(fetchFunc.getFirstName(data))
        .toEqual("Maricica");
    expect(fetchFunc.getAllFirstNames(data))
        .toEqual(["Maricica", "Nishant", "Nicuță", "Barbara", "Stanca", "Bella", "Fabian", "Славчо", "Upendra", "Dumitra"]);

    done();
});

test('Test show the timing problem', done => {
    fetchFunc.showDelayProblem();
    fetchFunc.showDelaySolution();
    done();
});

test('Test fetch and working with data', done => {
    fetchTest(done);    // Note this must be an async function
});

const fetchTest = async (done) => {
    await fetchFunc.workWithData();
    done();
}

    // showTime();
    // test3(done);
    // fetchFunc.getUsers();
    // fetchFunc.show(data);
    // fetchFunc.showNames();
    // fetchFunc.fetch();
    // fetchFunc.test2();
    // expect(getIdArray(groupCard))
    //     .toEqual(["idAdd", "1", "2", "3", "4"]);
// });


// async function test3(done) {
    // try {
    //     const response = await fetch(fetchFunc.url);
    //     const json = await response.json();
    //     console.log('Success:', await json);
    //     done()
    // } catch (error) {
    //     console.error('Error:', error);
    //     done()
    // }
// }

// function showTime() {
//     console.log('One');
//     setTimeout(function(){
//         console.log("THIS IS");
//     }, 2000);
//     console.log('Two');
//     console.log('Three');
// }
