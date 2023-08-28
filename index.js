const result = document.getElementById('result')
let val = '';
result.innerHTML = val
const btn7 = document.getElementById('btn7')
function addseven(){
    var seven = btn7.innerText
    result.innerHTML += seven
}
const btn8 = document.getElementById('btn8')
function addeight(){
    var eight = btn8.innerText
    result.innerHTML += eight
}
const btn9 = document.getElementById('btn9')
function addnine(){
    var nine = btn9.innerText
    result.innerHTML += nine
}
const btnac = document.getElementById('btnac')
function ac(){
    result.innerHTML = ''; 
}
const btndivide = document.getElementById('btndivide')
function divide(){
    var divide = btndivide.innerText
    result.innerHTML += divide
}
const btn4 = document.getElementById('btn4')
function addfour(){
    var four = btn4.innerText
    result.innerHTML += four
}
const btn5 = document.getElementById('btn5')
function addfive(){
    var five = btn5.innerText
    result.innerHTML += five
}
const btn6 = document.getElementById('btn6')
function addsix(){
    var six = btn6.innerText
    result.innerHTML += six
}
const btnde = document.getElementById('btnde')
function de(){
    result.textContent = result.textContent.slice(0, -1);
}
const btnmultiply = document.getElementById('btnmultiply')
function multiply(){
    var multiply = btnmultiply.innerText
    result.innerHTML += multiply
}
// Line Three

const btn1 = document.getElementById('btn1')
function addone(){
    var add1 = btn1.innerText;
    result.innerHTML += add1
}
const btn2 = document.getElementById('btn2')
function addtwo(){
    var add2 = btn2.innerText;
    result.innerHTML += add2
}
const btn3 = document.getElementById('btn3')
function addthree(){
    var add3 = btn3.innerText;
    result.innerHTML += add3
}
const btnminus = document.getElementById('btnminus')
function minus(){
    var minus = btnminus.innerText
    result.innerHTML += minus
}

// Line Four 

const btn0 = document.getElementById('btn0')
function addzero(){
    var zero = btn0.innerText
    result.innerHTML += zero
}
const btn00 = document.getElementById('btn00')
function adddzero(){
    var zero = btn00.innerText
    result.innerHTML += zero
}
const btnpoint = document.getElementById('btnpoint')
function point(){
    var point = btnpoint.innerText
    result.innerHTML += point
}
const btnequal = document.getElementById('btnequal')
function equal(){
    // var equal = btnequal.innerText
    // result.innerHTML += equal
    result.textContent = eval(result.textContent)
}
const btnplus = document.getElementById('btnplus')
function plus(){
    var plus = btnplus.innerText
    result.innerHTML += plus
}