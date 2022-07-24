
var gen = document.getElementById("generate");
var f = document.getElementById("ff");
var ok = document.getElementById("white0");
var city = document.getElementById("white1");
var mess =  document.getElementById("white2");


gen.addEventListener("click", scripty);


function scripty() {
  f.innerHTML = "Hello, my name is " + ok.value + " and I am from " + city.value + ". " + mess.value + "." ;  
}
