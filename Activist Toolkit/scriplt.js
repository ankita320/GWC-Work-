
/* .js files add interaction to your website */
//fact generator
/*var array = ["a", "Took away our power to make our own personal medical decisions, and they gave that power to lawmakers", "c", "d", "e"];
var myBtn = document.getElementById("myBtn");
var p = document.getElementById("s");
var count = 0;

myBtn.addEventListener ("click", add);

function add() {
  p.innerHTML = array[count];
  count++;
  if (count == array.length){
    count = 0;
  }
} 

*/

// hover text feature
var fi = document.getElementById("new");
var se = document.getElementById("new0");
var th = document.getElementById("new1");
var fo = document.getElementById("new2");
var fif = document.getElementById("new3");
var six = document.getElementById("new4");
var sev = document.getElementById("new5");
var ei = document.getElementById("new6");
var ni = document.getElementById("new7");

fi.addEventListener("mouseover", hover);
fi.addEventListener("mouseout", clover);

function hover() {fi.innerHTML = "Sign up for a membership to have access to updates on Abortion Funds and to help with it.";}
function clover() {fi.innerHTML = "Planned Parenthood Action Fund Associate Member.";}

se.addEventListener("mouseover", hover1);
se.addEventListener("mouseout", clover1);

function hover1() {se.innerHTML = "This sign on is in support to show that YOU are willing to fight back and take action!";
}

function clover1() {se.innerHTML = "Add your name to fight back!";}


th.addEventListener("mouseover", hover2);
th.addEventListener("mouseout", clover2);

function hover2() {th.innerHTML = "Empower others by speaking out about what abortion means to you and how it has made a difference in your life.";}
function clover2() {th.innerHTML = "Share Your Story";}


fo.addEventListener("mouseover", hover3);
fo.addEventListener("mouseout", clover3);

function hover3() {fo.innerHTML = "Event: BRING YOUR SIGNS AND VOICES WALK FROM THE PARK TO DOWNTOWN VETERAN’S PARK";}
function clover3() {fo.innerHTML = "Women's March in Ogunquit";}


fif.addEventListener("mouseover", hover4);
fif.addEventListener("mouseout", clover4);

function hover4() {fif.innerHTML = "Help out by donating to this center to an abortion fund.";}
function clover4() {fif.innerHTML = "Donate to the Center for Reproductive Rights";}


six.addEventListener("mouseover", hover5);
six.addEventListener("mouseout", clover5);

function hover5() {six.innerHTML = "Volunteer to help deeat anti-reproductive right lawmakers, protect abortion access, and more.";}
function clover5() {six.innerHTML = "Volunteer with Planned Parenthood";}


sev.addEventListener("mouseover", hover6);
sev.addEventListener("mouseout", clover6);

function hover6() {sev.innerHTML = "Use deep canvassing to share stories and challenge abortion stigmas";}
function clover6() {sev.innerHTML = "BTG Windham Canvass";}


ei.addEventListener("mouseover", hover7);
ei.addEventListener("mouseout", clover7);

function hover7() {ei.innerHTML = "Talk to comunity members on how to defend and protext abortion rights!";}
function clover7() {ei.innerHTML = "#BansOffOurBodies Milwaukee Canvass! - Planned Parenthood Advocates of Wisconsin";}

ni.addEventListener("mouseover", hover8);
ni.addEventListener("mouseout", clover8);

function hover8() {ni.innerHTML = "Share different posts to spread the word on social media!";}
function clover8() {ni.innerHTML = "Share on Social Media";}


// message generator

