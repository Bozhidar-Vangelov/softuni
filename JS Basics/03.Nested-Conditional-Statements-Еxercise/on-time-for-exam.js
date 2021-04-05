function onTimeForExam(
  examHourInput,
  examMinuteInput,
  arrivalHourInput,
  arrivalMinuteInput
) {
  let examHour = Number(examHourInput);
  let examMinute = Number(examMinuteInput);
  let arrivalHour = Number(arrivalHourInput);
  let arrivalMinute = Number(arrivalMinuteInput);

  let totalExamMinutes = examHour * 60 + examMinute;
  let totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
  let difference = totalExamMinutes - totalArrivalMinutes;

  if (difference > 30) {
    console.log("Early");

    if (difference >= 60) {
      let hours = Math.trunc(difference / 60);
      let minutes = difference % 60;

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      console.log(`${hours}:${minutes} hours before the start`);
    } else {
      console.log(`${difference} minutes before the start`);
    }
  } else if (difference >= 0) {
    console.log("On time");

    if (difference !== 0) {
      console.log(`${difference} minutes before the start`);
    }
  } else {
    console.log("Late");
    difference = Math.abs(difference);

    if (difference >= 60) {
      let hours = Math.trunc(difference / 60);
      let minutes = difference % 60;

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      console.log(`${hours}:${minutes} hours after the start`);
    } else {
      console.log(`${difference} minutes after the start`);
    }
  }
}

onTimeForExam("16", "00", "15", "00");
