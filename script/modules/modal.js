export default function modal(modal, link, pLink, btn) {
  const d = document,
    $modalContainer = d.getElementById(modal),
    $menuItem = d.getElementById(link),
    $btnClose = d.querySelector(btn);

  d.addEventListener("click", (e) => {
    if (e.target === $menuItem || e.target.matches(`${pLink} *`)) {
      e.preventDefault();
      $modalContainer.classList.add("modal-active");
      d.querySelector("body").classList.add("overflow-y");
    }

    if (e.target.matches(`${btn} *`)) {
      $modalContainer.classList.remove("modal-active");
      d.querySelector("body").classList.remove("overflow-y");
    }
  });
}
