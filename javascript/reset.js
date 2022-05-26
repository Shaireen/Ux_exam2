const body = document.getElementsByClassName("reset-password")[0];
const body3 = document.getElementsByClassName("popup-window--background")[0];
const body2 = document.getElementsByClassName("popup-window")[0];
body.addEventListener("click", function () {
  body3.classList.add("shown");
  body2.classList.add("shown");
});
const icon = document.getElementsByClassName("close-box")[0];
icon.addEventListener("click", function () {
  body3.classList.remove("shown");
  body2.classList.remove("shown");
});
