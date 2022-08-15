const d = document;
const $boxDate = d.getElementById("calc-date");

d.addEventListener("click", (e) => {
  if (e.target.matches(".date")) {
    if ($boxDate.textContent === "O") $boxDate.textContent = "";
    $boxDate.textContent += e.target.value;
  }

  if (e.target.matches(".equal"))
    $boxDate.textContent = eval($boxDate.textContent);
  if (e.target.matches(".clear-all")) $boxDate.textContent = "O";
  if (e.target.matches(".clear")) {
    $boxDate.textContent = $boxDate.textContent.slice(0, -1);
    if ($boxDate.textContent === "") $boxDate.textContent = "O";
  }
});
