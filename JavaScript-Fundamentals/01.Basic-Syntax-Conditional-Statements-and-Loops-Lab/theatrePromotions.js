function theatrePromotions(day, age) {
  age = Number(age);
  let ticketPrice = 0;

  if (day === "Weekday") {
    if (0 <= age && age <= 18) {
      ticketPrice = 12;
    } else if (age > 18 && age <= 64) {
      ticketPrice = 18;
    } else if (age > 64 && age <= 122) {
      ticketPrice = 12;
    }
  } else if (day === "Weekend") {
    if (0 <= age && age <= 18) {
      ticketPrice = 15;
    } else if (age > 18 && age <= 64) {
      ticketPrice = 20;
    } else if (age > 64 && age <= 122) {
      ticketPrice = 10;
    }
  } else if (day === "Holiday") {
    if (0 <= age && age <= 18) {
      ticketPrice = 5;
    } else if (age > 18 && age <= 64) {
      ticketPrice = 12;
    } else if (age > 64 && age <= 122) {
      ticketPrice = 10;
    }
  }

  if (age >= 0 && age <= 122) {
    console.log(`${ticketPrice}$`);
  } else {
    console.log("Error!");
  }
}

theatrePromotions("Holiday", 15);
