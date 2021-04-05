function sumSeconds(competitor1Input, competitor2Input, competitor3Input) {

    let competitor1 = Number(competitor1Input);
    let competitor2 = Number(competitor2Input);
    let competitor3 = Number(competitor3Input);

    let totalTime = competitor1 + competitor2 + competitor3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) { 
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }


}

sumSeconds("50", "50", "49");