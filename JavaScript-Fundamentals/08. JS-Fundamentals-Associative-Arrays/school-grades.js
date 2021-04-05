function schoolGrades(input) {
  let studentsInfo = {};

  for (const line of input) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!studentsInfo.hasOwnProperty(name)) {
      studentsInfo[name] = [];
    }

    let existing = studentsInfo[name];

    for (let grade of grades) {
      existing.push(grade);
    }
  }

  let sorted = Object.entries(studentsInfo).sort(averageGrades);

  for (let [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(", ")}`);
  }

  function averageGrades([nameA, gradesA], [nameB, gradesB]) {
    let avgA = 0;
    gradesA.forEach((x) => (avgA += x));
    avgA /= gradesA.length;

    let avgB = 0;
    gradesB.forEach((x) => (avgB += x));
    avgB /= gradesB.length;

    return avgA - avgB;
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
