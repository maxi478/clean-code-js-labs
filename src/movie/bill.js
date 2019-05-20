module.exports = class Bill {

    constructor() {
        this.purchaseTotal = 0;
    }

    /**
     * (1) New customers arrive at your ticket booth and tell you what movie they'd like to see (so keep it in mind!)
     *
     * @param runtime   movie's runtime in minutes
     * @param dayOfWeek day of the week
     * @param loge      true if seating category is 'loge')
     * @param threeD    true if the movie's shown in 3D
     */
    startPurchase(runtime, dayOfWeek, loge, threeD) {

    }

    /**
     * (2) Add a ticket to the customers' bill
     *
     * @param age     the age of the ticket buyer in years
     * @param student true if the ticket buyer is a student
     */
    addTicket(age, student) {
        this.purchaseTotal += student ? 8.0 : 11.0;
    }

    /**
     * (3) Calculate the total admission for the current customer(s)
     *
     * @return total in dollars.
     */
    finishPurchase() {
        return this.purchaseTotal;
    }
};
