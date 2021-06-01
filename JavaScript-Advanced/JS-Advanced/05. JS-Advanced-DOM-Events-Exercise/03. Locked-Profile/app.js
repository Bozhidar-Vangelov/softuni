function lockedProfile() {
  document.getElementById("main").addEventListener("click", onClick);

  function onClick(e) {
    if (e.target.tagName === "BUTTON") {
      const profile = e.target.parentNode;
      const isLocked =
        profile.querySelector("input[type=radio]:checked").value === "lock";

      if (isLocked) {
        return;
      }

      let hiddenDiv = profile.querySelector("div");

      if (e.target.textContent === "Show more") {
        e.target.textContent = "Hide it";
        hiddenDiv.style.display = "block";
      } else {
        e.target.textContent = "Show more";
        hiddenDiv.style.display = "none";
      }
    }
  }
}
