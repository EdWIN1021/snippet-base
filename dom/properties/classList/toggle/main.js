const toggle = document.querySelector(".toggle");
const box = document.querySelector(".box");

toggle.addEventListener("click", () => {
  box.classList.toggle("blue");
});