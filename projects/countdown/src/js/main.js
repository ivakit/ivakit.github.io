const d = document;
const $divMessage = d.querySelector(".final-message");

const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000, //segundos
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countdown = (deadline) => {
  let $days = d.getElementById("days"),
    $hours = d.getElementById("hours"),
    $minutes = d.getElementById("minutes"),
    $seconds = d.getElementById("seconds");

  const timerUptade = setInterval(() => {
    let time = getRemainTime(deadline);
    $days.textContent = time.remainDays;
    $hours.textContent = time.remainHours;
    $minutes.textContent = time.remainMinutes;
    $seconds.textContent = time.remainSeconds;

    if (time.remainTime <= 1) {
      clearInterval(timerUptade);
      $days.textContent = "00";
      $hours.textContent = "00";
      $minutes.textContent = "00";
      $seconds.textContent = "00";
      $divMessage.classList.add("active");
    }
  }, 1000);
};

d.addEventListener("click", (e) => {
  if (e.target.matches("#alert")) {
    $divMessage.classList.remove("active");
  }
});

d.addEventListener("DOMContentLoaded", () => {
  countdown("01/01/2023 00:00:00");
});
