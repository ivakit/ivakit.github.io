export default function formValidate() {
  const d = document;
  const $inputs = d.querySelectorAll(".form__input");
  const $form = d.querySelector(".form");

  $inputs.forEach((el) => {
    let $p = d.createElement("p");
    $p.id = el.name;
    $p.classList.add("form__input__error");
    $p.textContent = el.title;
    el.insertAdjacentElement("afterend", $p);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form__input")) {
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;
      let $message = d.getElementById($input.name);

      if (pattern && $input.value !== "") {
        let regexp = new RegExp(pattern);
        if (!regexp.exec($input.value)) {
          $message.classList.add("active");
          $input.classList.add("error");
        } else {
          $message.classList.remove("active");
          $input.classList.remove("error");
        }
      }
    }
  });

  d.addEventListener("submit", (e) => {
    $inputs.forEach(($input) => {
      if (!$input.value) {
        d.querySelector(".form__submit").classList.add("error");
        e.preventDefault();
      }
    });
    setTimeout(() => {
      $form.reset();
    }, 3000);
  });
}

//<p class="form__input__error">Por favor ingresa un correo válido</p>
