function meetings(input) {
  let calendar = {};

  for (const line of input) {
    let [day, name] = line.split(" ");

    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      calendar[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key in calendar) {
    console.log(`${key} -> ${calendar[key]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
