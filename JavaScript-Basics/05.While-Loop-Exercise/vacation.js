function vacation(input) {
  let index = 0;
  let neededMoney = Number(input[index++]);
  let savedMoney = Number(input[index++]);

  let days = 0;
  let spendingDays = 0;

  while (savedMoney < neededMoney) {
    let type = input[index++];
    let money = Number(input[index++]);
    days++;

    if (type === "spend") {
      if (savedMoney < money) {
        savedMoney = 0;
      } else {
        savedMoney -= money;
      }

      spendingDays++;

      if (spendingDays === 5) {
        break;
      }
    } else {
      spendingDays = 0;
      savedMoney += money;
    }
  }
  
  if (spendingDays === 5) {
    console.log(`You can't save the money.`);
    console.log(days);
  } else {
    console.log(`You saved the money for ${days} days.`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
