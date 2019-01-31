class Account {
	constructor(amount) {
		this.amount = amount;
	}

	balance() {
		return this.amount;
	}
}

class Larry {

}

// export default { Account };
module.exports = {Account, Larry};