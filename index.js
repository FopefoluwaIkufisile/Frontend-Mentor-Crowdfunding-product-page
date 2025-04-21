const allLinks = document.querySelectorAll("a");
const allPledges = document.querySelectorAll(".pledge");
const modalCase = document.querySelector(".modal-container");
const menuVariant = document.querySelector(".menu-variants");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const menuBox = document.querySelector(".menu-box")

modalCase.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("closer") ||
    e.target.classList.contains("modal-container") ||
    e.target.classList.contains("got-it")
  ) {
    modalCase.classList.add("hide");
  }
});

menuVariant.addEventListener("click", () => {
  menuOpen.classList.toggle("hide-menu-img");
  menuClose.classList.toggle("show-menu-img");
  menuBox.classList.toggle("show-menu")
});

allPledges.forEach((pledge) => {
  pledge.addEventListener("click", () => {
    const radio = pledge.querySelector(".radio-btn");
    radio.checked = true;
    const bottom = pledge.querySelector(".bottom-p");
    bottom.classList.add("show-flex");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
