function solution() {
  const main = document.getElementById("main");
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";

  async function revealArticles() {
    //makes request and parses it
    const articlesRequest = await fetch(url);
    const articles = await articlesRequest.json();

    //adds articles to the main section
    articles.forEach((article) =>
      main.appendChild(createHtmlArticle(article.title, article._id))
    );
  }

  //handles buttons logic
  async function handleHtmlArticle(e) {
    let accordionDiv = e.target.parentNode.parentNode;
    let extraDiv = accordionDiv.querySelector(".extra");
    let extraP = accordionDiv.querySelector(".extra p");

    if (!extraP.textContent) {
      const url = `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`;
      const articleRequest = await fetch(url);
      const article = await articleRequest.json();
      extraP.textContent = article.content;
    }

    if (extraDiv.style.display === "block") {
      extraDiv.style.display = "none";
      e.target.textContent = "MORE";
    } else {
      extraDiv.style.display = "block";
      e.target.textContent = "LESS";
    }
  }

  //creates articles html node
  function createHtmlArticle(name, id) {
    let htmlArticle = document.createElement("div");
    htmlArticle.classList.add("accordion");

    let headDiv = document.createElement("div");
    headDiv.classList.add("head");

    let span = document.createElement("span");
    span.textContent = name;
    let button = document.createElement("button");
    button.classList.add("button");
    button.setAttribute("id", id);
    button.textContent = "More";

    headDiv.appendChild(span);
    headDiv.appendChild(button);

    let extraDiv = document.createElement("div");
    extraDiv.classList.add("extra");

    let p = document.createElement("p");

    extraDiv.appendChild(p);

    htmlArticle.appendChild(headDiv);
    htmlArticle.appendChild(extraDiv);

    htmlArticle
      .querySelector(".button")
      .addEventListener("click", handleHtmlArticle);

    return htmlArticle;
  }

  revealArticles();
}

window.addEventListener("load", () => {
  solution();
});
