class Company {
  constructor() {
    this._departments = [];
  }

  addEmployee(username, salary, position, department) {
    if (!username || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }

    let newEmployee = {
      username: username,
      salary: Number(salary),
      position: position,
    };

    if (!this._departments[department]) {
      this._departments[department] = [];
    }

    this._departments[department].push(newEmployee);
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let department = "";
    let maxSalary = 0;
    Object.entries(this._departments).forEach(([key, value]) => {
      let salary = 0;
      value.forEach((e) => {
        salary += e.salary;
      });
      salary = salary / value.length;
      if (salary > maxSalary) {
        department = key;
        maxSalary = salary;
      }
    });
    if (department != "") {
      let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(
        2
      )}\n`;
      Object.values(this._departments[department])
        .sort(
          (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
        )
        .forEach((e) => {
          let em = `${e.username} ${e.salary} ${e.position}\n`;
          res += em;
        });
      return res.trim();
    }
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());