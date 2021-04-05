function vacation(groupAmount, typeOfGroup, dayOfWeek) {
  let price = 0;

  if (typeOfGroup === "Students") {
    if (dayOfWeek === "Friday") {
      price += 8.45;
    } else if (dayOfWeek === "Saturday") {
      price += 9.8;
    } else if (dayOfWeek === "Sunday") {
      price += 10.46;
    }
  } else if (typeOfGroup === "Business") {
    if (dayOfWeek === "Friday") {
      price += 10.9;
    } else if (dayOfWeek === "Saturday") {
      price += 15.6;
    } else if (dayOfWeek === "Sunday") {
      price += 16;
    }
  } else if (typeOfGroup === "Regular") {
    if (dayOfWeek === "Friday") {
      price += 15;
    } else if (dayOfWeek === "Saturday") {
      price += 20;
    } else if (dayOfWeek === "Sunday") {
      price += 22.5;
    }
  }

  let finalPrice = groupAmount * price;
  let studentsDiscount = finalPrice * 0.85;
  let businessDiscount = price * 10;
  let regularDiscount = finalPrice * 0.95;

  if (typeOfGroup === "Students" && groupAmount >= 30) {
    console.log(`Total price: ${studentsDiscount.toFixed(2)}`);
  } else if (typeOfGroup === "Business" && groupAmount >= 100) {
    finalPrice -= businessDiscount;
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
  } else if (
    typeOfGroup === "Regular" &&
    groupAmount >= 10 &&
    groupAmount <= 20
  ) {
    console.log(`Total price: ${regularDiscount.toFixed(2)}`);
  } else {
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
  }
}

vacation(100, "Business", "Saturday");
