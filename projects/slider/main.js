const d = document;

const slider = (idPrev, idNext, sliders) => {
  const $btnPrev = d.querySelector(idPrev),
    $btnNext = d.querySelector(idNext),
    $sliders = d.querySelectorAll(sliders);

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target.matches(`${idPrev} *`)) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i--;

      if (i < 0) i = $sliders.length - 1;

      $sliders[i].classList.add("active");
    }

    if (e.target.matches(`${idNext} *`)) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i++;

      if (i >= $sliders.length) i = 0;

      $sliders[i].classList.add("active");
    }
  });
  setInterval(() => {
    $sliders[i].classList.remove("active");
    i++;
    if (i >= $sliders.length) i = 0;

    $sliders[i].classList.add("active");
  }, 8000);
};

d.addEventListener("DOMContentLoaded", () => {
  slider("#btn-preview", "#btn-next", ".slider-container .slider");
});
