const textField = document.querySelector(".text_field");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alert(textField.value);
});
