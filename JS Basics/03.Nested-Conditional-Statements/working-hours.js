function workingHours(hourInput, dayInput) {
  let hour = Number(hourInput);
  let day = dayInput;

  if (hour >= 10 && hour <= 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      default:
        console.log("closed");
    }
  } else {
    console.log("closed");
  }
}

workingHours("15", "Sunday");
