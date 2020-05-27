class Ticket {

    constructor(age, student){
        this.age = age;
        this.student = student;
        this.basePrice = 11.0
    }

    calculateBaseTicketPrice(){
        if (this.student) {
            this.basePrice = 8.0;
        }
        if (this.age >= 65) {
            this.basePrice = 6.0;
        }
        if (this.age <= 13) {
            this.basePrice = 5.5;
        }
        return this.basePrice;
    }
}

module.exports = { Ticket }