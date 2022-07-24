var array = ["Thirty-six million women, plus many others who can become pregnant, are at risk of losing abortion access in their state.", "Outlawing abortion turned a safe health care practice into one with great legal risks.", "Women who couldn’t afford to pay the few providers offering abortion, or who were afraid of prosecution, sometimes tried dangerous methods of self-managing abortion.", "From January to May 2022, 11 states enacted 42 abortion bans — including a total ban in Oklahoma. In addition, 42 states introduced 541 abortion restrictions.", "In 2021, states enacted 108 abortion bans and restrictions — a record number in any one year since 1973. It includes Texas’s six-week abortion ban.", "From 1973 to 2021, states enacted 1,336 abortion restrictions — 44% of those in the last decade.","The Hyde Amendment is a discriminatory law passed every year since 1976 that blocks federal health programs like Medicaid from covering abortion. That put abortion out of reach for many people who use Medicaid — with exceptions only for instances of rape, incest, or when continuing a pregnancy could kill the patient.","A 2003 abortion ban that criminalizes certain safe abortion procedures in the second trimester of pregnancy took effect in 2007 after it was upheld by the Supreme Court.","Nearly 1 in 4 women in America will have an abortion by age 45.","Overturning Roe v. Wade is not what people want — 80% of Americans believe that abortion should be legal. ","Regardless of age, background, or educational level, the majority of people support Roe v. Wade.","Acceptance of abortion is longstanding: A majority of Americans have wanted abortion to be legal for decades.","Reproductive rights champions in states across the country are taking proactive measures to protect and expand access to abortion, despite the Supreme Court’s decision.","There are wide religious divides in views of whether abortion should be legal","Unsafe abortion is a leading – but preventable – cause of maternal deaths and morbidities. It can lead to physical and mental health complications and social and financial burdens for women, communities and health systems.","Medical researchers agree a fetus is not capable of experiencing pain until the third trimester, somewhere between 29 or 30 weeks. Despite this, 16 states have passed abortion bans based on the notion that fetuses experience pain at or around 22 weeks."," Restricted access harms minority, poorer women most"];

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
