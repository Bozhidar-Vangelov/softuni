function validate() {
  const email = document.getElementById("email");

  email.addEventListener("change", onChange);

  function onChange(e) {
    const emailValidator = /.+\@.+\..+/;
    if (emailValidator.test(email.value)) {
      email.classList.remove("error");
    } else {
      email.classList.add("error");
    }
  }
}
