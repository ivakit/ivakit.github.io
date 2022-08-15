import menu from "./modules/menu.js";
import animationIntersection from "./modules/animation.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".menu-btn", ".menu");
  animationIntersection("projects");
});
