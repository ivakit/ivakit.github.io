import menu from "./modules/menu.js";
import animationIntersection from "./modules/animation.js";
import modal from "./modules/modal.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".menu-btn", ".menu", ".nav__link");
  animationIntersection("projects");
  modal("modal", "contact-link", ".comment-link", ".modal-btn");
});
