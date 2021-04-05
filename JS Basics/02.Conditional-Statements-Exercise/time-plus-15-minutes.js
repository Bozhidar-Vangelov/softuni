function timePlus15Miuntes(hoursInput, minutesInput) {

    let hours = Number(hoursInput);
    let minutes = Number(minutesInput) + 15;

    if (minutes >= 60) {
        hours = hours + 1;
        minutes = minutes % 60;
    }

    if (hours >=24 ){
        hours = hours - 24;
    }

    if (minutes < 10) {
            console.log(`${hours}:0${minutes}`)
        } else {
            console.log(`${hours}:${minutes}`)
        }

}

timePlus15Miuntes("23", "59");