
const functions = {

    makeEmailArr: (arr) =>
        `${arr[0].toLowerCase()}.${arr[1].toLowerCase()}@evolveu.ca`,

    makeEmailObj: (obj) =>
        // Two ways to access an attribute in an object
        `${obj["fname"].toLowerCase()}.${obj.lname.toLowerCase()}@evolveu.ca`,

    loopStaff: (data) => {
        let list = [];
        for (let i = 0; i < data.length; i++) {
            list.push(functions.makeEmailObj(data[i]));
        }
        return list;
    },

    loopStaffIn: (data) => {
        let list = [];
        for (const v in data) {
            list.push(functions.makeEmailObj(data[v]));
        }
        return list;
    },

    loopStaffOf: (data) => {
        let list = [];
        for (let v of data) {
            list.push(functions.makeEmailObj(v));
        }
        return list;
    },

    loopStaffForEach: (data) => {
        let list = [];
        data.forEach((v) => list.push(functions.makeEmailObj(v)));
        return list;
    },

    loopStaffMap: (data) => {
        let list = data.map((v) => functions.makeEmailObj(v));
        return list;
    },
}

export default functions;