const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    console.log(btns[i].textContent);
  });
}