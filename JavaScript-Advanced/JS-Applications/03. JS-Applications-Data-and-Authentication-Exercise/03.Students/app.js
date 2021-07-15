let submitButton = document.getElementById("submit");
let form = document.getElementById("form");
form.addEventListener("submit", createStudent);

async function createStudent(e) {
  e.preventDefault();
  let formData = new FormData(form);

  let firstName = formData.get("firstName");
  let lastName = formData.get("lastName");
  let facultyNumber = formData.get("facultyNumber");
  let grade = Number(formData.get("grade"));

  if (
    firstName.length <= 0 ||
    lastName.length <= 0 ||
    facultyNumber.length <= 0 ||
    grade.length <= 0
  ) {
    alert("All fields must be fulfilled!");
    return;
  }

  let studentData = {
    firstName,
    lastName,
    facultyNumber,
    grade,
  };

  const url = "http://localhost:3030/jsonstore/collections/students";
  const studentResponse = await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  const student = await studentResponse.json();

  if (typeof student.grade !== "number") {
    alert("Grade must contains only numbers!");
    return;
  }

  createHtmlStudent(student);

  form.reset();
}

function createHtmlStudent(student) {
  let tBody = document.querySelector("#results tbody");
  let tr = document.createElement("tr");
  let firstNameTd = document.createElement("td");
  let lastNameTd = document.createElement("td");
  let facultyNumberTd = document.createElement("td");
  let gradeTd = document.createElement("td");

  firstNameTd.textContent = student.firstName;
  lastNameTd.textContent = student.lastName;
  facultyNumberTd.textContent = student.facultyNumber;
  gradeTd.textContent = student.grade;

  tBody.append(tr);
  tr.append(firstNameTd);
  tr.append(lastNameTd);
  tr.append(facultyNumberTd);
  tr.append(gradeTd);
}
