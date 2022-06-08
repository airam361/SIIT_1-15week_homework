let backdrop = document.getElementById("backdrop");
let modal = document.getElementById("modal");
let formBtn = document.querySelector("button[type = 'submit']");

console.log(formBtn);

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  backdrop.style.display = "block";
  modal.style.display = "block";
});
