function editElement(ref, match, replacer) {
  let matcher = new RegExp(match, "g");
  let result = ref.textContent.replace(matcher, replacer);
  ref.textContent = result;
}
