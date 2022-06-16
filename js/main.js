window.addEventListener("load", function () {
  setTimeout(function() {
    load.style.display = "none";
    sound.play();
  }, 2000);
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
  if (window.scrollY >= skills.offsetTop) {
    html.style.width = "95%";
    css.style.width = "95%";
    js.style.width = "60%";
    c.style.width = "5%";
    py.style.width = "5%";
    arduino.style.width = "5%";
  }
  // language section
  if (window.scrollY >= lang.offsetTop) {
    ar.style.width = "100%";
    en.style.width = "65%";
    de.style.width = "25%";
  }
});

// slider

control.style.left = "-240px";
openBtn.onclick = function () {
  if (control.style.left == "-240px") {
    control.style.left = "0";
  } else {
    control.style.left = "-240px";
  }
};

// customize

document.body.style = localStorage.theme;

var lightTheme = `--main: #F8F9FD;--card: #FFFFFF;--color: #1F1F1F;--shadow: rgb(217,217,217);`;

var darkTheme = `--main: #141B2D;--card: #1F2A40;--color: white;--shadow: rgb(22,22,22);`;

light.onclick = function () {
  localStorage.theme = lightTheme;
  document.body.style = localStorage.theme;
  location.reload();
};

dark.onclick = function () {
  localStorage.theme = darkTheme;
  document.body.style = `${localStorage.theme}${localStorage.btn}`;
  location.reload();
};

// colors

if (localStorage.getItem("btn")) {
  document.body.style = `${localStorage.theme}--btn: ${localStorage.btn}`;
}

let btns = document.querySelectorAll("#colorGroup button");

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    localStorage.btn = e.currentTarget.dataset.color;
    document.body.style = `--btn: ${e.currentTarget.dataset.color}`;
    location.reload();
  });
});



reset.onclick = function () {
  localStorage.clear();
  location.reload();
};
