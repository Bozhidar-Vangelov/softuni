async function loadRepos() {
  const username = document.getElementById("username");
  const url = `https://api.github.com/users/${username.value}/repos`;

  let ul = document.getElementById("repos");

  let request = await fetch(url);
  let response = await request.json();

  ul.innerHTML = "";
  response.forEach((r) => {
    let item = document.createElement("li");
    let link = document.createElement("a");
    link.href = r.html_url;
    link.textContent = r.full_name;
    item.appendChild(link);
    ul.appendChild(item);
  });
}
