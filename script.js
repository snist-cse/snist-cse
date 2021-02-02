var section1=document.getElementById("row1");
var section2=document.getElementById("row2");
var section3=document.getElementById("row3");
var section4=document.getElementById("row4");
var section5=document.getElementById("row5");
var section6=document.getElementById("row6");

var btn1=document.getElementById("java");
var btn2=document.getElementById("python");
var btn3=document.getElementById("dm");
var btn4=document.getElementById("msfa");
var btn5=document.getElementById("bee");
var btn6=document.getElementById("aec");

function openjava(){
    section1.style.transform="translateX(0%)";
    section2.style.transform="translateX(200%)";
    section3.style.transform="translateX(200%)";
    section4.style.transform="translateX(200%)";
    section5.style.transform="translateX(200%)";
    section6.style.transform="translateX(200%)";
    btn1.classList.remove('btn-light');
    btn1.classList.add('btn-dark');
    btn2.classList.add('btn-light');
    btn2.classList.remove('btn-dark');
    btn3.classList.add('btn-light');
    btn3.classList.remove('btn-dark');
    btn4.classList.add('btn-light');
    btn4.classList.remove('btn-dark');
    btn5.classList.add('btn-light');
    btn5.classList.remove('btn-dark');
    btn6.classList.add('btn-light');
    btn6.classList.remove('btn-dark');
    console.log("clicked1");
}
function openpython(){
    section1.style.transform="translateX(-110%)";
    section2.style.transform="translateX(0%)";
    section3.style.transform="translateX(200%)";
    section4.style.transform="translateX(200%)";
    section5.style.transform="translateX(200%)";
    section6.style.transform="translateX(200%)";
    btn1.classList.add('btn-light');
    btn1.classList.remove('btn-dark');
    btn2.classList.remove('btn-light');
    btn2.classList.add('btn-dark');
    btn3.classList.add('btn-light');
    btn3.classList.remove('btn-dark');
    btn4.classList.add('btn-light');
    btn4.classList.remove('btn-dark');
    btn5.classList.add('btn-light');
    btn5.classList.remove('btn-dark');
    btn6.classList.add('btn-light');
    btn6.classList.remove('btn-dark');
}
function opendm(){
    section1.style.transform="translateX(-110%)";
    section2.style.transform="translateX(-110%)";
    section3.style.transform="translateX(0%)";
    section4.style.transform="translateX(200%)";
    section5.style.transform="translateX(200%)";
    section6.style.transform="translateX(200%)";
    btn1.classList.add('btn-light');
    btn1.classList.remove('btn-dark');
    btn2.classList.add('btn-light');
    btn2.classList.remove('btn-dark');
    btn3.classList.remove('btn-light');
    btn3.classList.add('btn-dark');
    btn4.classList.add('btn-light');
    btn4.classList.remove('btn-dark');
    btn5.classList.add('btn-light');
    btn5.classList.remove('btn-dark');
    btn6.classList.add('btn-light');
    btn6.classList.remove('btn-dark');
}
function openmsfa(){
    section1.style.transform="translateX(-110%)";
    section2.style.transform="translateX(-110%)";
    section3.style.transform="translateX(-110%)";
    section4.style.transform="translateX(0%)";
    section5.style.transform="translateX(200%)";
    section6.style.transform="translateX(200%)";
    btn1.classList.add('btn-light');
    btn1.classList.remove('btn-dark');
    btn2.classList.add('btn-light');
    btn2.classList.remove('btn-dark');
    btn3.classList.add('btn-light');
    btn3.classList.remove('btn-dark');
    btn4.classList.remove('btn-light');
    btn4.classList.add('btn-dark');
    btn5.classList.add('btn-light');
    btn5.classList.remove('btn-dark');
    btn6.classList.add('btn-light');
    btn6.classList.remove('btn-dark');
}
function openbee(){
    section1.style.transform="translateX(-110%)";
    section2.style.transform="translateX(-110%)";
    section3.style.transform="translateX(-110%)";
    section4.style.transform="translateX(-110%)";
    section5.style.transform="translateX(0%)";
    section6.style.transform="translateX(200%)";
    btn1.classList.add('btn-light');
    btn1.classList.remove('btn-dark');
    btn2.classList.add('btn-light');
    btn2.classList.remove('btn-dark');
    btn3.classList.add('btn-light');
    btn3.classList.remove('btn-dark');
    btn4.classList.add('btn-light');
    btn4.classList.remove('btn-dark');
    btn5.classList.remove('btn-light');
    btn5.classList.add('btn-dark');
    btn6.classList.add('btn-light');
    btn6.classList.remove('btn-dark');
}
function openaec(){
    section1.style.transform="translateX(-110%)";
    section2.style.transform="translateX(-110%)";
    section3.style.transform="translateX(-110%)";
    section4.style.transform="translateX(-110%)";
    section5.style.transform="translateX(-110%)";
    section6.style.transform="translateX(0%)";
    btn1.classList.add('btn-light');
    btn1.classList.remove('btn-dark');
    btn2.classList.add('btn-light');
    btn2.classList.remove('btn-dark');
    btn3.classList.add('btn-light');
    btn3.classList.remove('btn-dark');
    btn4.classList.add('btn-light');
    btn4.classList.remove('btn-dark');
    btn5.classList.add('btn-light');
    btn5.classList.remove('btn-dark');
    btn6.classList.remove('btn-light');
    btn6.classList.add('btn-dark');
}
