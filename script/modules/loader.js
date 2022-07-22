export default function loader(id) {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById(id).style.display = "none";
    document.querySelector("body").classList.remove("overflow");
  });
}
