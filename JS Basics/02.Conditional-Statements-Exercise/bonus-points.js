function bonusPoints(pointsInput) {

    let points = Number(pointsInput);
    let bonus = 0.0;

    if (points <= 100) {
        bonus = 5
    } else if (points > 1000) {
        bonus = points * 0.10
    } else {
        bonus = points * 0.20
    }

    if (points % 2 === 0) {
        bonus = bonus + 1;
    } else if (points % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(points + bonus);
}

bonusPoints("175");