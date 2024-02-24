const removeBtn = document.querySelector(".remove");
const box = document.querySelector(".box");

removeBtn.addEventListener("click", () => {
  box.classList.remove("blue");
});