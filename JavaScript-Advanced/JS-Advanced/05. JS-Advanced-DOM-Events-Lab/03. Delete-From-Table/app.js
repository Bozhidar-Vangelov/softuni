function deleteByEmail() {
  const input = document.querySelector('input[name="email"]').value;
  const emails = Array.from(
    document.querySelectorAll("#customers tbody tr td:nth-child(2)")
  );

  for (let email of emails) {
    let tr = email.parentNode;
    if (email.textContent === input) {
      tr.parentNode.removeChild(tr);
      document.getElementById("result").textContent = "Deleted.";
      document.querySelector('input[name="email"]').value = "";
      return;
    }
  }

  document.getElementById("result").textContent = "Not found.";
}
