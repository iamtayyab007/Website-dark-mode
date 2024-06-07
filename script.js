let darkModeIcon = document.getElementById("dark");
let logo = document.querySelector(".logo");
darkModeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    logo.style.filter = "invert(1)";
    darkModeIcon.src = "assets/dark theme icon/sun.png";
  } else {
    logo.style.filter = "none";
    darkModeIcon.src = "assets/dark theme icon/moon.png";
  }
};
