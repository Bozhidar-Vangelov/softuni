function worldSwimmingRecord(recordInput, distanceInput, timeInput) {

    let record = Number(recordInput);
    let distance = Number(distanceInput);
    let time = Number(timeInput);

    let timeNeeded = distance * time;
    let delay = Math.floor(distance / 15) * 12.5
    let totalTimeNeeded = timeNeeded + delay;

    if (record < totalTimeNeeded) {
        let neededSeconds = totalTimeNeeded - record;
        console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeNeeded.toFixed(2)} seconds.`)
    }

}

worldSwimmingRecord("10464",
"1500",
"20")

;
