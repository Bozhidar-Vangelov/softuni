class Restaurant {
  constructor(budget, menu, stockProducts, history) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    let result = [];
    for (const product of products) {
      let [productName, productQuantity, productTotalPrice] =
        product.split(" ");

      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (productTotalPrice <= this.budgetMoney) {
        if (!this.stockProducts.hasOwnProperty(productName)) {
          this.stockProducts[productName] = productQuantity;
        } else {
          this.stockProducts[productName] += productQuantity;
        }

        this.budgetMoney -= productTotalPrice;

        result.push(`Successfully loaded ${productQuantity} ${productName}`);
      } else {
        result.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    this.history = [...this.history, ...result];
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (this.menu.hasOwnProperty(meal)) {
      return `The ${meal} is already in the our menu, try something different.`;
    } else {
      let products = {};

      for (const neededProduct of neededProducts) {
        let [productName, productQuantity] = neededProduct.split(" ");

        products[productName] = Number(productQuantity);
      }

      this.menu[meal] = {
        products: products,
        price: Number(price),
      };
    }
    let menuProductsCount = Object.keys(this.menu).length;

    if (menuProductsCount === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else if (menuProductsCount > 1) {
      return `Great idea! Now with the ${meal} we have ${menuProductsCount} meals in the menu, other ideas?`;
    }
  }

  showTheMenu() {
    let result = [];
    for (let [meal, index] of Object.entries(this.menu)) {
      result.push(`${meal} - $ ${index.price}`);
    }
    if (result.length === 0)
      return "Our menu is not ready yet, please come later...";
    else {
      return result.join("\n");
    }
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {
      let availableProducts = validateProducts(
        this.menu[meal],
        this.stockProducts
      );

      if (!availableProducts) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      } else {
        this.budgetMoney += this.menu[meal].price;
        for (const key in this.menu[meal].products) {
          this.stockProducts[key] -= this.menu[meal].products[key];
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
      }
    }

    function validateProducts(meal, stockProducts) {
      let neededProducts = meal.products;

      let isAvailable = true;
      for (const key in neededProducts) {
        if (!stockProducts.hasOwnProperty(key)) {
          isAvailable = false;
          break;
        }
      }
      return isAvailable;
    }
  }
}

let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);

// let kitchen = new Restaurant(1000);
console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);

// let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());

kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);

kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
