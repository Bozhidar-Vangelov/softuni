function addItem() {
  let input = document.querySelector("#newItemText").value;
  let items = document.querySelector("#items");

  let newItem = document.createElement("li");

  newItem.textContent = input;

  items.appendChild(newItem);
}
