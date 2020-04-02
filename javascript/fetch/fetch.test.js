
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
    const fetchTest = async (done) => {
        await fetchFunc.workWithData();
        done();
    }
});




test('Show the delay problem', done => {
    fetchFunc.showDelayProblem();
    done();
});

