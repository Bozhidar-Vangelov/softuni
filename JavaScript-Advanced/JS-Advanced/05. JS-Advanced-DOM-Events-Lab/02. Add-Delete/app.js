function addItem() {
  let input = document.querySelector("#newItemText").value;
  let items = document.querySelector("#items");

  if (input.length === 0) return;

  let newItem = document.createElement("li");

  newItem.textContent = input;

  items.appendChild(newItem);

  document.querySelector("#newItemText").value = "";

  let remove = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");

  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);

  newItem.appendChild(remove);
  items.appendChild(newItem);

  function deleteItem() {
    newItem.remove();
  }
}
