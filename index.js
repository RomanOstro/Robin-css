import { blockScroll } from "./utils.js";

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header-button");
const headerBurgerLinks = document.querySelectorAll(".header-menu-link");

burgerButton.addEventListener("click", (e) => {
  header.classList.toggle("open");
  e.currentTarget.classList.toggle("active");

  const headerIsOpen = header.classList.contains("open");

  if (headerIsOpen) {
    document.addEventListener("wheel", blockScroll, { passive: false });
    /для отключения колесика мышки, при открытом меню/;
    document.addEventListener("touchmove", blockScroll, { passive: false });
    /для отключения тача на телефонах, при открытом меню/;

    headerBurgerLinks.forEach((burgerLink) => {
      burgerLink.addEventListener("click", closeMenu);
    });
  } else {
    closeMenu();
  }
});

function closeMenu() {
  header.classList.remove("open");
  burgerButton.classList.remove("active");

  /удаляем обработчики если меню закрыто/;
  document.removeEventListener("wheel", blockScroll);
  document.removeEventListener("touchmove", blockScroll);

  headerBurgerLinks.forEach((burgerLink) => {
    burgerLink.removeEventListener("click", closeMenu);
  });
}
