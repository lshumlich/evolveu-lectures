import account from "./account";

test('Account functions:', () => {
	console.log('Hello World');
	console.log('account:', account);
	const checking = new account.Account(5);
	console.log('Amount:', checking.balance());
});