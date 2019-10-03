

const functions = {

    url: 'https://uinames.com/api/?amount=10',

    show(data) {
        console.log(data[0].name);
    },

    showNames(data) {
        data.forEach((d, i, x) => console.log(d.name, i));
    },

    // async justPlay() {
    justPlay() {
        console.log("What Ever.");

    },
    // async getUsers() {
    //     try {
    //         const response = await fetch(functions.url);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error:', error);
    //         throw (error);
    //     }
    // },

    // async workWithData() {
    //     const data = await this.getUsers();
    //     this.show(data);
    //     this.showNames(data);
    // }
}

addEventListener('load', () => {
    // functions.workWithData();
});


async function test2() {
    // async test2() {
    try {
        const response = await fetch(functions.url);
        const json = await response.json();
        console.log('Success:', json);
    } catch (error) {
        console.error('Error:', error);
    }
}

function showDelayProblem() {
    console.log('One');
    setTimeout(() => {          // Simulates a fetch
        console.log("Two");
    }, 1 * 1000);
    console.log('Three');       // We have a problem Huston
}
// showDelayProblem();

async function showDelaySolution() {
    try {
        console.log('One');
        const value = await                 // Simulate fetch
            new Promise(
                (resolve, reject) =>
                    setTimeout(() => resolve("Two"),
                        1 * 1000));
        // Now that we have the value we can use it.
        console.log(value);
        console.log('Three');
    } catch (error) {
        console.log(error);
    }
}

const me = {
    "name": "Larry",
    "surname": "Shumlich",
    "gender": "male",
    "region": "Canada"
};

console.log(me);
const sMe = JSON.stringify(me);
console.log(sMe);

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    return await response.json();   // parses JSON response into native JavaScript objects
}

export default functions;