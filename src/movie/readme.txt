Movie tickets:

Implement the Bill JS class, the implementation should adhere to the following business rules:

- General Admission: $11.00 per ticket. /
- Students: $8.00 per ticket. / 
- Senior Citizen (65 & older): $6.00 per ticket. / 
- Children (under 13): $5.50 per ticket. /
- Group Pricing (if 20 people or more): $6.00 per ticket.  /

Exceptions:

- 3D movie: add $3.00 per ticket. / 
- Over-length (more than 120 minutes): add $1.50 per ticket. / 
<<<<<<< HEAD
- Special Movie Day (Thursday, but does not apply if group-pricing): subtract $2.00 per ticket. /
=======
- Special Movie Day (Thursday, but does not apply if group-pricing): subtract $2.00 per ticket.
>>>>>>> 7aeaeea5b44ffc7c31d5345b693676624e41da82
- Weekends: add $1.50 per ticket.
- Balcony Seating: add $2.00 per ticket.


Example usage of Bill (in pseudo code):

bill.startPurchase(...);

bill.addTicket(...);
bill.addTicket(...);
bill.addTicket(...);
bill.addTicket(...);

bill.finishPurchase();


Source: https://github.com/rjswenson/movie-ticket-kata