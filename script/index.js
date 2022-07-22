import loader from "./modules/loader.js";
import menu from "./modules/menu.js";
import animationIntersection from "./modules/animation.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  loader("loader");
  menu(".menu-btn", ".menu");
  animationIntersection("projects");
});
