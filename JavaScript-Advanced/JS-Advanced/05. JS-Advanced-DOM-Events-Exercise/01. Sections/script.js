function create(words) {
  let content = document.querySelector("#content");
  for (const word of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);
  }

  content.addEventListener("click", onClick);

  function onClick(e) {
    const paragraph = e.target.children[0] || e.target;

    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
}
