function attachEvents() {
  const phoneBookUl = document.getElementById("phonebook");
  const loadButton = document.getElementById("btnLoad");
  const createButton = document.getElementById("btnCreate");

  const phoneBookUrl = "http://localhost:3030/jsonstore/phonebook";

  loadButton.addEventListener("click", loadPhoneBook);
  createButton.addEventListener("click", createContact);

  async function loadPhoneBook() {
    const phoneBookResponse = await fetch(phoneBookUrl);
    const phoneBook = await phoneBookResponse.json();

    phoneBookUl.textContent = "";

    Object.values(phoneBook).forEach((contact) => {
      let li = document.createElement("li");
      li.textContent = `${contact.person}: ${contact.phone}`;
      li.id = contact._id;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";

      deleteButton.addEventListener("click", deleteContact);

      li.append(deleteButton);
      phoneBookUl.append(li);
    });
  }

  async function deleteContact(e) {
    const key = e.target.parentNode.id;
    const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${key}`;

    fetch(deleteUrl, {
      method: "Delete",
    });

    e.target.parentNode.remove();
  }

  async function createContact(e) {
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");

    const newContact = {
      person: personInput.value,
      phone: phoneInput.value,
    };
    const contactResponse = await fetch(phoneBookUrl, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    const contact = await contactResponse.json();

    let contactLi = document.createElement("li");
    contactLi.textContent = `${contact.person}: ${contact.phone}`;
    contactLi.id = contact._id;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", deleteContact);

    contactLi.append(deleteButton);
    phoneBookUl.append(contactLi);

    personInput.value = "";
    phoneInput.value = "";
  }
}

attachEvents();
