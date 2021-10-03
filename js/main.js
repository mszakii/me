window.addEventListener("load", function () {
  setTimeout(function() {
    load.style.display = "none";
  }, 3000);
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 300) {
    cardup.style = "margin-top: 0; transform: scale(1);";
  } else {
    cardup.style = "margin-top: 1000px; transform: scale(.5);";
  }
});

window.addEventListener("scroll", function () {
  // skills section
  if (window.scrollY >= 700) {
    html.style.width = "90%";
    css.style.width = "90%";
    js.style.width = "40%";
    c.style.width = "5%";
    py.style.width = "5%";
    arduino.style.width = "5%";
  }
  // language section
  if (window.scrollY >= 2200) {
    ar.style.width = "100%";
    en.style.width = "65%";
    de.style.width = "10%";
  }
});
