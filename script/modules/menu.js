export default function menu(btn, menu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      d.querySelector(menu).classList.toggle("is-active");
      d.querySelector(btn).classList.toggle("is-active");
    }
  });
}
