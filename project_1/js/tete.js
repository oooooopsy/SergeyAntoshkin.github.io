/*
let password = prompt('Введите пароль:', '');

if (password !== "qwerty01") { 
  while (password != "qwerty01") {
    password = prompt('Введите пароль:', '')
  }
} */

document.getElementById("sliderPolosa").onclick = sliderTestButton;
var left = 0;
function sliderTestButton() {
  var polosa1 = document.getElementById('polosa1');
  left = left - 500;
  polosa1.style.left = left +"px";
}

