async function getRecipes() {
  const url = "http://localhost:3030/jsonstore/cookbook/recipes";

  const request = await fetch(url);
  const response = await request.json();

  const main = document.querySelector("main");

  main.innerHTML = "";

  let recipes = Object.values(response);

  recipes.map(createRecipe).forEach((recipe) => main.appendChild(recipe));

  return recipes;
}

window.addEventListener("load", () => {
  getRecipes();
});

function createRecipe(recipe) {
  let previewArticle = document.createElement("article");
  previewArticle.classList.add("preview");

  let divTitle = document.createElement("div");
  divTitle.classList.add("title");

  let h2title = document.createElement("h2");
  h2title.textContent = recipe.name;

  let divSmall = document.createElement("div");
  divSmall.classList.add("small");

  let recipeImage = document.createElement("img");
  recipeImage.src = recipe.img;

  previewArticle.appendChild(divTitle);
  previewArticle.appendChild(divSmall);
  divTitle.appendChild(h2title);
  divSmall.appendChild(recipeImage);

  previewArticle.addEventListener("click", () =>
    getSingleRecipeInfo(recipe._id, previewArticle)
  );

  return previewArticle;
}

async function getSingleRecipeInfo(id, preview) {
  const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

  const request = await fetch(url);
  const recipe = await request.json();

  let article = document.createElement("article");

  let h2title = document.createElement("h2");
  h2title.textContent = recipe.name;
  article.appendChild(h2title);

  let divBand = document.createElement("div");
  divBand.classList.add("band");
  article.appendChild(divBand);

  let divThumb = document.createElement("div");
  divThumb.classList.add("thumb");
  divBand.appendChild(divThumb);

  let img = document.createElement("img");
  img.src = recipe.img;
  divThumb.appendChild(img);

  let divIngredients = document.createElement("div");
  divIngredients.classList.add("ingredients");
  divBand.appendChild(divIngredients);

  let h3ingredients = document.createElement("h3");
  h3ingredients.textContent = "Ingredients:";
  divIngredients.appendChild(h3ingredients);

  let ulIngredients = document.createElement("ul");
  divIngredients.appendChild(ulIngredients);

  for (const ingredient of recipe.ingredients) {
    let li = document.createElement("li");
    li.textContent = ingredient;
    ulIngredients.appendChild(li);
  }

  let divDescription = document.createElement("div");
  divDescription.classList.add("description");

  let h3preparation = document.createElement("h3");
  h3preparation.textContent = "Preparation:";
  divDescription.appendChild(h3preparation);

  for (const step of recipe.steps) {
    let p = document.createElement("p");
    p.textContent = step;
    divDescription.appendChild(p);
  }

  article.appendChild(divDescription);

  preview.replaceWith(article);
}
