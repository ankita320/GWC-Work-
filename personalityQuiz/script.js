
/*Add your JavaScript here*/
var questionCount = 0;

var maxScore = 0;
var eddieScore = 0;
var steveScore = 0;
var robinScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");

q1a1.addEventListener("click", max);
q1a2.addEventListener("click", eddie);
q1a3.addEventListener("click", steve);
q1a4.addEventListener("click", robin);

q2a1.addEventListener("click", max);
q2a2.addEventListener("click", eddie);
q2a3.addEventListener("click", steve);
q2a4.addEventListener("click", robin);



q3a1.addEventListener("click", max);
q3a2.addEventListener("click", eddie);
q3a3.addEventListener("click", steve);
q3a4.addEventListener("click", robin);


q4a1.addEventListener("click", max);
q4a2.addEventListener("click", eddie);
q4a3.addEventListener("click", steve);
q4a4.addEventListener("click", robin);


q5a1.addEventListener("click", max);
q5a2.addEventListener("click", eddie);
q5a3.addEventListener("click", steve);
q5a4.addEventListener("click", robin);

function max() {
  questionCount += 1;
  maxScore += 1;
  if (questionCount >= 5) {
    ok();
}
}
function eddie() {
  questionCount += 1;
  eddieScore += 1;
  if (questionCount >= 5) {
    ok();
  }
}

  function steve() {
  questionCount += 1;
  steveScore += 1;
  if (questionCount >= 5) {
    ok();
  }
}



  function robin() {
  questionCount += 1;
  robinScore += 1;
  if (questionCount >= 5) {
    ok();
  }
}

function ok() {
var yas = document.getElementById("res")
yas.addEventListener("click", updateResult)
}

  function updateResult() {
    if (maxScore >= 3) {
      result.innerHTML = "Max";
      m();
      
    }
    else if (eddieScore >= 3) {
      result.innerHTML = "Eddie";
      e();
    }
    else if (steveScore >= 3) {
      result.innerHTML = "Steve";
      s();
    }
   else if (robinScore >= 3) {
      result.innerHTML = "Robin";
     r()
    }
  
    else {
            result.innerHTML = "You are like all of them !!";
      st();

    }
}

function m(){
let maxImage = document.getElementById("image");
 
            image.src =
"https://wegotthiscovered.com/wp-content/uploads/2022/04/sadie-sink-stranger-things-max-1200x900.jpg"
 
            document.getElementById("res")
                    .style.display = "none";
}



function e(){
let eddieImage = document.getElementById("image");
 
            image.src =
"https://www.denofgeek.com/wp-content/uploads/2022/07/stranger-things-season-4-joe-quinn-eddie-munson-netflix.png?resize=768%2C432"
 
            document.getElementById("res")
                    .style.display = "none";
}

function s(){
let steveImage = document.getElementById("image");
 
            image.src =
"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fsteve-2000.jpg&q=60"
 
            document.getElementById("res")
                    .style.display = "none";
}

function r(){
let robinImage = document.getElementById("image");
 
            image.src =
"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fst3-production-still-4-2000.jpg&q=60"
 
            document.getElementById("res")
                    .style.display = "none";
}
var colors = document.getElementById("q1a1");
colors.addEventListener("click", colors1);

function colors1() {
  colors.style.backgroundColor = 'black';
  colors.style.color = 'pink';
}


var colorss = document.getElementById("q1a2");
colorss.addEventListener("click", colorss1);

function colorss1() {
  colorss.style.backgroundColor = 'black';
  colorss.style.color = 'pink';
}





var coloras = document.getElementById("q1a3");
coloras.addEventListener("click", coloras1);

function coloras1() {
  coloras.style.backgroundColor = 'black';
  coloras.style.color = 'pink';
}



var colorqs = document.getElementById("q1a4");
colorqs.addEventListener("click", colorqs1);

function colorqs1() {
  colorqs.style.backgroundColor = 'black';
  colorqs.style.color = 'pink';
}



var colores = document.getElementById("q2a1");
colores.addEventListener("click", colores1);

function colores1() {
  colores.style.backgroundColor = 'black';
  colores.style.color = 'pink';
}



var colorrs = document.getElementById("q2a2");
colorrs.addEventListener("click", colorrs1);

function colorrs1() {
  colorrs.style.backgroundColor = 'black';
  colorrs.style.color = 'pink';
}



var colorgs = document.getElementById("q2a3");
colorgs.addEventListener("click", colorgs1);

function colorgs1() {
  colorgs.style.backgroundColor = 'black';
  colorgs.style.color = 'pink';
}


var colorus = document.getElementById("q2a4");
colorus.addEventListener("click", colorus1);

function colorus1() {
  colorus.style.backgroundColor = 'black';
  colorus.style.color = 'pink';
}




var colorms = document.getElementById("q3a1");
colorms.addEventListener("click", colorms1);

function colorms1() {
  colorms.style.backgroundColor = 'black';
  colorms.style.color = 'pink';
}



var colorts = document.getElementById("q3a2");
colorts.addEventListener("click", colorts1);

function colorts1() {
  colorts.style.backgroundColor = 'black';
  colorts.style.color = 'pink';
}




var coloraas = document.getElementById("q3a3");
coloraas.addEventListener("click", coloraas1);

function coloraas1() {
  coloraas.style.backgroundColor = 'black';
  coloraas.style.color = 'pink';
}


var colorsss = document.getElementById("q3a4");
colorsss.addEventListener("click", colorsss1);

function colorsss1() {
  colorsss.style.backgroundColor = 'black';
  colorsss.style.color = 'pink';
}



var coloroos = document.getElementById("q4a1");
coloroos.addEventListener("click", coloroos1);

function coloroos1() {
  coloroos.style.backgroundColor = 'black';
  coloroos.style.color = 'pink';
}


var colorqqs = document.getElementById("q4a2");
colorqqs.addEventListener("click", colorqqs1);

function colorqqs1() {
  colorqqs.style.backgroundColor = 'black';
  colorqqs.style.color = 'pink';
}


var colorvvs = document.getElementById("q4a3");
colorvvs.addEventListener("click", colorvvs1);

function colorvvs1() {
  colorvvs.style.backgroundColor = 'black';
  colorvvs.style.color = 'pink';
}


var colornns = document.getElementById("q4a4");
colornns.addEventListener("click", colornns1);

function colornns1() {
  colornns.style.backgroundColor = 'black';
  colornns.style.color = 'pink';
}


var colorzzs = document.getElementById("q5a1");
colorzzs.addEventListener("click", colorzzs1);

function colorzzs1() {
  colorzzs.style.backgroundColor = 'black';
  colorzzs.style.color = 'pink';
}


var colorbbs = document.getElementById("q5a2");
colorbbs.addEventListener("click", colorbbs1);

function colorbbs1() {
  colorbbs.style.backgroundColor = 'black';
  colorbbs.style.color = 'pink';
}



var colorffs = document.getElementById("q5a3");
colorffs.addEventListener("click", colorffs1);

function colorffs1() {
  colorffs.style.backgroundColor = 'black';
  colorffs.style.color = 'pink';
}


var colorfffs = document.getElementById("q5a4");
colorfffs.addEventListener("click", colorfffs1);

function colorfffs1() {
  colorfffs.style.backgroundColor = 'black';
  colorfffs.style.color = 'pink';
}



































