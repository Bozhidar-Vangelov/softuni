function trainingLab(arg1, arg2){

    let h = Number(arg1) * 100;
    let w = Number(arg2) * 100;
    
    let corridor = w - 100;
    let countDesksRows = Math.floor(corridor / 70);
    let conutDesksColumns = Math.floor(h / 120);
    let totalSeats = (countDesksRows * conutDesksColumns) - 3;
 
    console.log(totalSeats);

}

trainingLab(15, 8.9);