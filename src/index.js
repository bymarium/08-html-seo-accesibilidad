const modalOpen = document.querySelectorAll(".modal__open");
const modal = document.querySelector(".modal");

modalOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("modal--open");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal--open");
  }
});