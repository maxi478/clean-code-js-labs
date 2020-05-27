const { Ticket } = require('./ticket');
const { BaseCalculator, WeekDayDiscountCalculator, VariablePriceCalculator } = require('./calculator');

class Bill {

    /**
     * (1) New customers arrive at your ticket booth and tell you what movie they'd like to see (so keep it in mind!)
     *
     * @param runtime   movie's runtime in minutes
     * @param dayOfWeek day of the week
     * @param balcony      true if seating category is 'loge')
     * @param threeD    true if the movie's shown in 3D
     */

    ticketBasePrices = [];
    variablePrices = [];

    startPurchase(runtime, dayOfWeek, balcony, threeD) {
        this.runtime = runtime;
        this.balcony = balcony;
        this.threeD = threeD;
        this.dayOfWeek = dayOfWeek;
    }

    /**
     * (2) Add a ticket to the customers' bill
     *
     * @param age     the age of the ticket buyer in years
     * @param student true if the ticket buyer is a student
     */
    addTicket(age, student) {
        let defaultTicket = new Ticket(age, student);
        let defaultPrice = defaultTicket.calculateDefaultTicketPrice();

        let weekdayCalculator = new WeekDayDiscountCalculator(this.dayOfWeek);
        let weekdayDiscount = weekdayCalculator.calculateWeekdayDiscount();

        let baseCalculator = new BaseCalculator(defaultPrice, weekdayDiscount);
        let basePrice = baseCalculator.calculateBasePrice();

        let variableCalculator = new VariablePriceCalculator(this.threeD, this.runtime, this.balcony);
        let variablePrice = variableCalculator.calculateVariablePrice();

        this.ticketBasePrices.push(basePrice);
        this.variablePrices.push(variablePrice);
    }

    /**
     * (3) Calculate the total admission for the current customer(s)
     *
     * @return total in dollars.
     */
    finishPurchase() {
        if (this.ticketBasePrices.length >= 20) {
            this.ticketBasePrices = this.ticketBasePrices.map(x => 6.0);
        }
        return this.ticketBasePrices.reduce((a, b) => a + b, 0) + this.variablePrices.reduce((a, b) => a + b, 0);
    }
};

module.exports = { Bill };