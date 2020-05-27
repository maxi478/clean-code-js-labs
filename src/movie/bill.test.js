const { Bill } = require('./bill');

let bill;

beforeEach(() => {
    bill = new Bill();
});

test('generalAdmissionShouldBeDefaultPrice', () => {
    // Arrange
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(18, false);

    // Act
    let billPrice = bill.finishPurchase();

    //Assert
    expect(billPrice).toBe(11.0);
});

test('studentAdmissionShouldEqualStudentPrice', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(18, true);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(8.0);
});


test('multipleGeneralAdmissionsShouldEqualDefaultPrice', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(18, false);
    bill.addTicket(18, false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(22.0);
});

test('_3DShouldAddTobillPrice', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, true);
    bill.addTicket(18, false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(14.0);
});

test('seniorCitizenOf65ShouldHaveDiscount', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(65, false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(6.0);

});

test('seniorCitizenOver65ShouldHaveDiscount', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(80, false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(6.0);

});

test('childrenUnder13ShouldHaveDiscount', () => {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    bill.addTicket(12,false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(5.5);
});

test('groupsOf20ShouldHaveDiscount', ()=> {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    for(let i = 0; i < 20; i++){
        bill.addTicket(18, false);
    }
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(120.0);
});

test('groupsOver20ShouldHaveDiscount', ()=> {
    bill.startPurchase(100, 'WEDNESDAY', false, false);
    for(let i = 0; i < 21; i++){
        bill.addTicket(18, false);
    }
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(126.0);
});

test('moviesOver120MinutesShouldAddToPrice', ()=> {
    bill.startPurchase(140, 'WEDNESDAY', false, false);
    bill.addTicket(18,false);
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(12.5);
});

test('specialMovieDayShouldHaveDiscount', ()=> {
    bill.startPurchase(100, 'THURSDAY', false, false);
    bill.addTicket(18,false);
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(9.0);
});

test('specialMovieDayDiscountShouldNotApplyOnGroupPricing', ()=> {
    bill.startPurchase(100, 'THURSDAY', false, false);
    for(let i = 0; i < 21; i++){
        bill.addTicket(18, false);
    }
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(126.0);
});

test('weekendShouldAddToPrice', ()=> {
    bill.startPurchase(100, 'SATURDAY', false, false);
    bill.addTicket(18,false);

    
    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(12.5);
});

test('balconyShouldAddToPrice', ()=> {
    bill.startPurchase(100, 'MONDAY', true, false);
    bill.addTicket(18,false);

    let billPrice = bill.finishPurchase();

    expect(billPrice).toBe(13.0);
});




