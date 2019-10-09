import functions from './daily';

/*
    Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

/*	
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

/*
    Sample data for the next few exercises.
*/

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

/*	
	Write the function to build email addresses for the company.
*/

const testEmail = (arr) => {
    expect(arr[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(arr[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(arr[6])
        .toEqual("benjamin.amis@evolveu.ca");
}

test('email builder for company with loop', () => {
    const staffEmail = functions.loopStaff(data.staff);
    testEmail(staffEmail);
});

test('email builder for company with loop in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    testEmail(staffEmail);
});

test('email builder for company with loop of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    testEmail(staffEmail);
});

test('email builder for company with forEach callback', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    testEmail(staffEmail);
});

test('email builder for company with map callback', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    testEmail(staffEmail);
});
