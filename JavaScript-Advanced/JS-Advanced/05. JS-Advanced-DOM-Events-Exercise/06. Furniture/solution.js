function solve() {
  const [generate, buy] = document.querySelectorAll("button");
  const [firstTextArea, secondTextArea] = document.querySelectorAll("textarea");
  const tbody = document.querySelector("tbody");
  generate.addEventListener("click", generateItems);

  function generateItems() {
    const items = JSON.parse(firstTextArea.value);

    for (const item of items) {
      const row = document.createElement("tr");

      const imageData = document.createElement("td");
      const image = document.createElement("img");
      image.setAttribute("src", item.img);
      imageData.appendChild(image);

      const nameData = document.createElement("td");
      const name = document.createElement("p");
      name.textContent = item.name;
      nameData.appendChild(name);

      const priceData = document.createElement("td");
      const price = document.createElement("p");
      price.textContent = item.price;
      priceData.appendChild(price);

      const decFactorData = document.createElement("td");
      const decFactor = document.createElement("p");
      decFactor.textContent = item.decFactor;
      decFactorData.appendChild(decFactor);

      const checkBoxData = document.createElement("td");
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBoxData.appendChild(checkBox);

      row.appendChild(imageData);
      row.appendChild(nameData);
      row.appendChild(priceData);
      row.appendChild(decFactorData);
      row.appendChild(checkBoxData);

      tbody.appendChild(row);
    }
  }

  buy.addEventListener("click", buyItem);

  function buyItem() {
    const furniture = Array.from(
      tbody.querySelectorAll("input[type=checkbox]:checked")
    ).map((input) => input.parentNode.parentNode);

    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0,
    };

    for (const row of furniture) {
      const cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;

      const decFactor = Number(cells[3].children[0].textContent);
      result.decFactorSum += decFactor;
    }

    secondTextArea.value = `Bought furniture: ${result.bought.join(
      ", "
    )}\nTotal Price: ${result.totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${result.decFactorSum / furniture.length}`;
  }
}
