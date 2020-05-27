class Calculator {

    constructor(defaultTicketPrice, weekDayDiscount){
        this.defaultTicketPrice = defaultTicketPrice;
        this.weekDayDiscount = weekDayDiscount;
    }

    calculateBasePrice(){
        return this.defaultTicketPrice + this.weekDayDiscount;
    }
}

module.exports = { Calculator }
