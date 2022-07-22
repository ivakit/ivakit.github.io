const d = document;

const validateForm = () => {
  const $inputs = d.querySelectorAll(".form__input"),
    $form = d.querySelector(".form");

  const regExp = {
    usr: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
    character: /^[\s\S]{0,200}$/,
  };

  const values = {
    user: false,
    email: false,
    message: false,
  };

  const validateDate = (e) => {
    let $input = e.target;
    switch ($input.name) {
      case "name":
        validateCamp(regExp.usr, $input, "user");
        break;
      case "email":
        validateCamp(regExp.email, $input, "email");
        break;
      case "message":
        validateCamp(regExp.character, $input, "message");
        break;
    }
  };

  const validateCamp = (regexp, el, id) => {
    if (regexp.test(el.value) && el.value !== "") {
      d.getElementById(`group-${id}`).classList.remove("error");
      d.getElementById(`group-${id}`).classList.add("succes");
      d.querySelector(`#group-${id} i`).classList.remove("fa-circle-xmark");
      d.querySelector(`#group-${id} i`).classList.add("fa-circle-check");
      d.querySelector(`#group-${id} .form__error__message`).classList.remove(
        "active"
      );
      values[id] = true;
    } else {
      d.getElementById(`group-${id}`).classList.add("error");
      d.getElementById(`group-${id}`).classList.remove("succes");
      d.querySelector(`#group-${id} i`).classList.add("fa-circle-xmark");
      d.querySelector(`#group-${id} i`).classList.remove("fa-circle-check");
      d.querySelector(`#group-${id} .form__error__message`).classList.add(
        "active"
      );
      values[id] = false;
    }
  };

  $inputs.forEach((el) => {
    el.addEventListener("keyup", validateDate);
    el.addEventListener("blur", validateDate);
  });

  d.addEventListener("submit", (e) => {
    if (
      values.user === false &&
      values.email === false &&
      values.message === false
    ) {
      e.preventDefault();
      d.querySelector(".form__message").classList.add("active");
    } else {
      setTimeout(() => {
        $form.reset();
      }, 3000);
    }
  });
};

d.addEventListener("DOMContentLoaded", () => {
  validateForm();
});
