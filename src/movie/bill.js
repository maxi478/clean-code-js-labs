const { Ticket } = require('./ticket');
const { Calculator } = require('./calculator');

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
    variablePrices =[];

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
        let defaultTicket = new Ticket(age,student);
        let defaultPrice = defaultTicket.calculateDefaultTicketPrice();

        let weekdayDiscount = this.calculateWeekDayDiscount()
        let baseCalculator = new Calculator(defaultPrice, weekdayDiscount);

        let basePrice = baseCalculator.calculateBasePrice();

        let variablePriceAddOn = this.calculateVariablePriceAddOn();
        
        this.ticketBasePrices.push(basePrice);
        this.variablePrices.push(variablePriceAddOn);
    }

    calculateVariablePriceAddOn(){
        let extraPrice = 0.0;
        if (this.threeD) {
            extraPrice += 3.0;
        }
        if(this.runtime > 120){
            extraPrice += 1.5;
        }
        if(this.balcony){
            extraPrice +=2.0;
        }
        return extraPrice;
    }

    calculateWeekDayDiscount(){
        let weekdayDiscount = 0;
        switch(this.dayOfWeek) {
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
              break;
            case "THURSDAY":
              weekdayDiscount = -2.0
              break;
            case "FRIDAY":
              break;
            case "SATURDAY":
            case "SUNDAY":
              weekdayDiscount = 1.5
              break;
          }
          return weekdayDiscount;
    }

    /**
     * (3) Calculate the total admission for the current customer(s)
     *
     * @return total in dollars.
     */
    finishPurchase() {
        if(this.ticketBasePrices.length >= 20){
            this.ticketBasePrices = this.ticketBasePrices.map(x => 6.0);
        }
        return this.ticketBasePrices.reduce((a, b) => a + b, 0) + this.variablePrices.reduce((a, b) => a + b, 0);
    }
};

module.exports = { Bill };