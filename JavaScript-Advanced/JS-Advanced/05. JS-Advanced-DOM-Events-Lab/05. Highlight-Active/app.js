function focused() {
  Array.from(document.querySelectorAll("input")).forEach((input) => {
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
  });

  function onFocus(ev) {
    ev.target.parentNode.classList.add("focused");
  }

  function onBlur(ev) {
    ev.target.parentNode.classList.remove("focused");
  }
}
