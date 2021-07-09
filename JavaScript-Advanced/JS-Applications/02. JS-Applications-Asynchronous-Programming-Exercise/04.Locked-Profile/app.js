function lockedProfile() {
  (async () => {
    //makes request and parses it
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const profileRequest = await fetch(url);
    const profiles = await profileRequest.json();

    //gets htmlElements
    const main = document.getElementById("main");
    const defaultProfile = document.querySelector(".profile");
    defaultProfile.remove();

    //iterates through profiles and assigns them html elements
    Object.keys(profiles).forEach((key, i) => {
      let profile = profiles[key];
      let htmlProfile = createHtmlProfile(
        i + 1,
        profile.username,
        profile.email,
        profile.age
      );
      main.appendChild(htmlProfile);
    });
  })();

  //handles showMoreButton click logic
  function showMoreHandler(e) {
    const profile = e.target.parentNode;
    const showMoreButton = e.target;
    const hiddenFields = e.target.previousElementSibling;
    const radioButton = profile.querySelector('input[type="radio"]:checked');

    if (radioButton.value !== "unlock") {
      return;
    }

    showMoreButton.textContent =
      showMoreButton.textContent === "Show More" ? "Hide it" : "Show More";

    hiddenFields.style.display =
      hiddenFields.style.display === "block" ? "none" : "block";
  }

  //creates html profile elements
  function createHtmlProfile(index, username, email, age) {
    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    let profileImage = document.createElement("img");
    profileImage.src = "./iconProfile2.png";
    profileImage.classList.add("userIcon");

    let lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock";

    let lockRadio = document.createElement("input");
    lockRadio.type = "radio";
    lockRadio.name = `user${index}Locked`;
    lockRadio.value = "lock";
    lockRadio.checked = true;

    let unlockLabel = document.createElement("label");
    unlockLabel.textContent = "Unlock";

    let unlockRadio = document.createElement("input");
    unlockRadio.type = "radio";
    unlockRadio.name = `user${index}Locked`;
    unlockRadio.value = "unlock";

    let br = document.createElement("br");
    let hr = document.createElement("hr");

    let usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";

    let usernameInput = document.createElement("input");
    usernameInput.name = `user${index}Username`;
    usernameInput.value = username;
    usernameInput.readOnly = true;
    usernameInput.disabled = true;

    let hiddenFields = document.createElement("div");
    hiddenFields.id = `user${index}HiddenFields`;

    let hiddenFieldsHr = document.createElement("hr");

    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";

    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = `user${index}Email`;
    emailInput.value = email;
    emailInput.readOnly = true;
    emailInput.disabled = true;

    let ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";

    let ageInput = document.createElement("input");
    ageInput.type = "email";
    ageInput.name = `user${index}Age`;
    ageInput.value = age;
    ageInput.readOnly = true;
    ageInput.disabled = true;

    hiddenFields.appendChild(hiddenFieldsHr);
    hiddenFields.appendChild(emailLabel);
    hiddenFields.appendChild(emailInput);
    hiddenFields.appendChild(ageLabel);
    hiddenFields.appendChild(ageInput);

    let showMoreButton = document.createElement("button");
    showMoreButton.textContent = "Show More";
    showMoreButton.addEventListener("click", showMoreHandler);

    profileDiv.appendChild(profileImage);
    profileDiv.appendChild(lockLabel);
    profileDiv.appendChild(lockRadio);
    profileDiv.appendChild(unlockLabel);
    profileDiv.appendChild(unlockRadio);
    profileDiv.appendChild(br);
    profileDiv.appendChild(hr);
    profileDiv.appendChild(usernameLabel);
    profileDiv.appendChild(usernameInput);
    profileDiv.appendChild(hiddenFields);
    profileDiv.appendChild(showMoreButton);

    return profileDiv;
  }
}
