function vacationBooksList(sheetsPerBookInput, sheetsPerHourInput, daysInput){

    let sheetsPerBook = Number(sheetsPerBookInput);
    let sheetsPerHour = Number(sheetsPerHourInput);
    let days = Number(daysInput);

    let neededHoursPerBook = sheetsPerBook / sheetsPerHour;
    let totalNeededHours = neededHoursPerBook / days;

    console.log(totalNeededHours)

}

vacationBooksList("212", "20", "2");