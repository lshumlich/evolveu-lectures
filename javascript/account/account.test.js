// import b from "./account";
const account = require('./account');

test('Account functions:', () => {
	console.log('Hello World');
	console.log('account:', account);
	checking = new account.Account(5);
	console.log('Amount:', checking.balance());
});