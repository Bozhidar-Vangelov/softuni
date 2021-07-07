async function loadCommits() {
  const username = document.getElementById("username");
  const repo = document.getElementById("username");
  const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;

  let ul = document.getElementById("commits");

  let request = await fetch(url);
  let response = await request.json();

  ul.innerHTML = "";

  if (!request.ok) {
    let item = document.createElement("li");
    item.textContent = `Error ${request.status} ${request.statusText}`;
    ul.appendChild(item);
  } else {
    response.forEach((r) => {
      let item = document.createElement("li");
      item.textContent = `${r.commit.author.name}: ${r.commit.message}`;
      ul.appendChild(item);
    });
  }
}
