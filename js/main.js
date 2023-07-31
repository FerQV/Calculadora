let btn0 = document.getElementById ("btn0");
let btn1 = document.getElementById ("btn1");
let btn2 = document.getElementById ("btn2");
let btn3 = document.getElementById ("btn3");
let btn4 = document.getElementById ("btn4");
let btn5 = document.getElementById ("btn5");
let btn6 = document.getElementById ("btn6");
let btn7 = document.getElementById ("btn7");
let btn8 = document.getElementById ("btn8");
let btn9 = document.getElementById ("btn9");
let btnMultiplica = document.getElementById ("btnMultiplica");
let btnDivide = document.getElementById ("btnDivide");
let btnResta = document.getElementById ("btnResta");
let btnSuma = document.getElementById ("btnSuma");
let btnIgual = document.getElementById ("btnIgual");
let btnPunto = document.getElementById ("btnPunto");
let btnReset = document.getElementById ("btnReset");

let txtResultado = document.getElementById("txtResultado");
let lblDatos = document.getElementById("lblDatos");

btnReset.addEventListener("click", function(event){
  event.preventDefault()
  lblDatos.innerText="";
  txtResultado.value="";
});
btn0.addEventListener("click", function (event) {
  txtResultado.value += "0";
});
btn1.addEventListener("click", function (event) {
  txtResultado.value += "1";
});
btn2.addEventListener("click", function (event) {
  txtResultado.value += "2";
});
btn3.addEventListener("click", function (event) {
  txtResultado.value += "3";
});
btn4.addEventListener("click", function (event) {
  txtResultado.value += "4";
});
btn5.addEventListener("click", function (event) {
  txtResultado.value += "5";
});
btn6.addEventListener("click", function (event) {
  txtResultado.value += "6";
});
btn7.addEventListener("click", function (event) {
  txtResultado.value += "7";
});
btn8.addEventListener("click", function (event) {
  txtResultado.value += "8";
});
btn9.addEventListener("click", function (event) {
  txtResultado.value += "9";
});
btnSuma.addEventListener("click", function () {
  lblDatos.innerText += "+";
  txtResultado.value += "+";
});
btnResta.addEventListener("click", function () {
  lblDatos.innerText += "-";
  txtResultado.value += "-";
});
btnDivide.addEventListener("click", function () {
  lblDatos.innerText += "/";
  txtResultado.value += "/";
});
btnMultiplica.addEventListener("click", function () {
  lblDatos.innerText += "*";
  txtResultado.value += "x";
});
btnPunto.addEventListener("click", function () {
  lblDatos.innerText += ".";
  txtResultado.value += ".";
});
