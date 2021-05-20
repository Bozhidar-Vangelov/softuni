function toggle() {
  let btn = document.querySelector(".button");
  let hiddenText = document.querySelector("#extra");

  if (btn.textContent === "Less") {
    btn.textContent = "More";
    hiddenText.style.display = "none";
  } else {
    btn.textContent = "Less";
    hiddenText.style.display = "block";
  }
}
