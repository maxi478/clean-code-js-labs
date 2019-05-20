const Bill = require('./Bill');
const DayOfWeek = require('./dayOfWeek');

describe('Given a purchase is started', () => {
	let bill;

	beforeEach(() => {
		bill = new Bill();
	});

	describe('When no tickets are added', () => {

		test('Then calculated value should be 0', () => {
			bill.startPurchase(82, DayOfWeek.MONDAY, false, false);

			expect(bill.finishPurchase()).toBe(0.0);
		});
	});

	describe('When a general admission ticket is added', () => {

		test('Then calculated value is 11', () => {
			bill.startPurchase(82, DayOfWeek.MONDAY, false, false);

			bill.addTicket(16, false);

			expect(bill.finishPurchase()).toBe(11.0);
		});
	});

	describe('When 2 general admission tickets are added', () => {

		test('Then calculated value is twice the general admission', () => {
			bill.startPurchase(82, DayOfWeek.MONDAY, false, false);

			bill.addTicket(16, false);
			bill.addTicket(16, false);

			expect(bill.finishPurchase()).toBe(22.0);
		});
	});

	describe('When a student ticket is added', () => {

		test('Then calculated value is 8.0', () => {
			bill.startPurchase(82, DayOfWeek.MONDAY, false, false);

			bill.addTicket(16, true);

			expect(bill.finishPurchase()).toBe(8.0);
		});
	});

	// TODO: MovieTicket needs builder?
	// TODO: keep list of tickets?
	// TODO: Keep state of how many tickets were purchased.
});
