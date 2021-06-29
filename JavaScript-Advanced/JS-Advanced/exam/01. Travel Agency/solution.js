window.addEventListener("load", solution);

function solution() {
  let submitButton = document.querySelector("#submitBTN");
  let editButton = document.querySelector("#editBTN");
  let continueButton = document.querySelector("#continueBTN");

  let divBlock = document.querySelector("#block");

  let fullNameInput = document.querySelector("#fname");
  let fullName = document.createElement("li");

  let emailInput = document.querySelector("#email");
  let email = document.createElement("li");

  let phoneNumberInput = document.querySelector("#phone");
  let phoneNumber = document.createElement("li");

  let addressInput = document.querySelector("#address");
  let address = document.createElement("li");

  let postalCodeInput = document.querySelector("#code");
  let postalCode = document.createElement("li");

  submitButton.addEventListener("click", () => {
    if (!fullNameInput.value || !emailInput.value) {
      return;
    }

    fullName.textContent = `Full Name: ${fullNameInput.value}`;
    email.textContent = `Email: ${emailInput.value}`;
    phoneNumber.textContent = `Phone Number: ${phoneNumberInput.value}`;
    address.textContent = `Address: ${addressInput.value}`;
    postalCode.textContent = `Postal Code: ${postalCodeInput.value}`;

    fullNameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";
    addressInput.value = "";
    postalCodeInput.value = "";

    let ul = document.querySelector("#infoPreview");
    ul.appendChild(fullName);
    ul.appendChild(email);
    ul.appendChild(phoneNumber);
    ul.appendChild(address);
    ul.appendChild(postalCode);

    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
  });

  editButton.addEventListener("click", () => {
    fullNameInput.value = fullName.textContent.split(": ")[1];
    fullName.remove();
    emailInput.value = email.textContent.split(": ")[1];
    email.remove();
    phoneNumberInput.value = phoneNumber.textContent.split(": ")[1];
    phoneNumber.remove();
    addressInput.value = address.textContent.split(": ")[1];
    address.remove();
    postalCodeInput.value = postalCode.textContent.split(": ")[1];
    postalCode.remove();
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });

  continueButton.addEventListener("click", () => {
    while (divBlock.lastElementChild) {
      divBlock.removeChild(divBlock.lastElementChild);
    }

    let heading = document.createElement("h3");
    heading.textContent = "Thank you for your reservation!";

    divBlock.appendChild(heading);
  });
}
