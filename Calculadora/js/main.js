let operandoA;
let operandoB;
let operación;

function init (){
let txtResultado = document.getElementById("txtResultado");  
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
let btnReset = document.getElementById ("btnreset");


//

btn0.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "0";
}
btn1.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "1";
}
btn2.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "2";
}
btn3.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "3";
}
btn4.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "4";
}
btn5.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "5";
}
btn6.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "6";
}
btn7.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "7";
}
btn8.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "8";
}
btn9.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ "9";
}
btnPunto.onclick = function(event){
  txtResultado.textContent = txtResultado.textContent+ ".";
}

btnReset.onclick = function(event){
  resetear();
}

btnSuma.onclick = function(event){
  operandoA=txtResultado.textContent;
  operación= "+";
  limpiar();
}
btnResta.onclick = function(event){
  operandoA=txtResultado.textContent;
  operación= "-";
  limpiar();
}
btnMultiplica.onclick = function(event){
  operandoA=txtResultado.textContent;
  operación= "*";
  limpiar();
}
btnDivide.onclick = function(event){
  operandoA=txtResultado.textContent;
  operación= "/";
  limpiar();
}
btnIgual.onclick = function(event){
  operandoB=txtResultado.textContent;
  resolver();
}

} // init

function limpiar (){
  txtResultado.textContent = "";
}
 function resetear (){
  txtResultado.textContent = "";
  operandoA = 0;
  operandoB = 0;
  operación = "";
 }
 function resolver (){
  let res = 0;
  switch(operación){
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
       break;
    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
       break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
       break;
    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
       break;
  }
  resetear();
  txtResultado.textContent = res;
 }


