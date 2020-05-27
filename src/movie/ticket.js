class Ticket {

    constructor(age, student){
        this.age = age;
        this.student = student;
        this.defaultPrice = 11.0
    }

    calculateDefaultTicketPrice(){
        if (this.student) {
            this.defaultPrice = 8.0;
        }
        if (this.age >= 65) {
            this.defaultPrice = 6.0;
        }
        if (this.age <= 13) {
            this.defaultPrice = 5.5;
        }
        return this.defaultPrice;
    }
}

module.exports = { Ticket }