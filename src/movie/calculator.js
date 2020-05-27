class BaseCalculator {

    constructor(defaultTicketPrice, weekDayDiscount) {
        this.defaultTicketPrice = defaultTicketPrice;
        this.weekDayDiscount = weekDayDiscount;
    }

    calculateBasePrice() {
        return this.defaultTicketPrice + this.weekDayDiscount;
    }

}

class WeekDayDiscountCalculator {
    constructor(weekDay) {
        this.weekDay = weekDay;
    }

    calculateWeekdayDiscount() {
        let weekdayDiscount = 0;
        switch (this.weekDay) {
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
}

class ExtraChargeCalculator {
    constructor(threeD, runtime, balcony) {
        this.threeD = threeD;
        this.runtime = runtime;
        this.balcony = balcony;
    }

    calculateVariablePrice() {
        let extraCharge = 0.0;
        if (this.threeD) {
            extraCharge += 3.0;
        }
        if (this.runtime > 120) {
            extraCharge += 1.5;
        }
        if (this.balcony) {
            extraCharge += 2.0;
        }
        return extraCharge;
    }
}

module.exports = { BaseCalculator, WeekDayDiscountCalculator, ExtraChargeCalculator }
