class Bill {

    /**
     * (1) New customers arrive at your ticket booth and tell you what movie they'd like to see (so keep it in mind!)
     *
     * @param runtime   movie's runtime in minutes
     * @param dayOfWeek day of the week
     * @param loge      true if seating category is 'loge')
     * @param threeD    true if the movie's shown in 3D
     */

    ticketPrices = [];
    extraPrice = 0.0;
    specialMovieDay = false;

    startPurchase(runtime, dayOfWeek, loge, threeD) {
        if (threeD) {
            this.extraPrice += 3.0;
        }
        if(runtime > 120){
            this.extraPrice += 1.5;
        }
        if(loge){
            this.extraPrice +=2.0;
        }
        switch(dayOfWeek) {
            case "MONDAY":
            case "TUESDAY":
            case "WEDNESDAY":
              break;
            case "THURSDAY":
              this.extraPrice -= 2.0
              this.specialMovieDay = true;
              break;
            case "FRIDAY":
              break;
            case "SATURDAY":
              this.extraPrice += 1.5
              break;
            case "SUNDAY":
              this.extraPrice += 1.5
              break;
          }

    }

    /**
     * (2) Add a ticket to the customers' bill
     *
     * @param age     the age of the ticket buyer in years
     * @param student true if the ticket buyer is a student
     */
    addTicket(age, student) {
        let beginPrice = 11.0
        if (student) {
            beginPrice = 8.0;
        }
        if (age >= 65) {
            beginPrice = 6.0;
        }
        if (age <= 13) {
            beginPrice = 5.5;
        }

        this.ticketPrices.push(beginPrice + this.extraPrice);
    }

    /**
     * (3) Calculate the total admission for the current customer(s)
     *
     * @return total in dollars.
     */
    finishPurchase() {
        if(this.ticketPrices.length >= 20){
            this.ticketPrices = this.ticketPrices.map(x => 6.0);
        }
        return this.ticketPrices.reduce((a, b) => a + b, 0);
    }
};

module.exports = { Bill };