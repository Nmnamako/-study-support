const taskModal = document.getElementById("taskModal");
const black = document.getElementById("black");
const timerModal = document.getElementById("timerModal");
let taskTitleShow = document.getElementById("taskTitleShow")


//.innerHTMLをつけることで[object HTMLSpanElement]の出力を回避する
let taskTitle1 = document.getElementById("taskTitle1").innerHTML;
let taskTitle2 = document.getElementById("taskTitle2").innerHTML;
let taskTitle3 = document.getElementById("taskTitle3").innerHTML;
let taskTitle4 = document.getElementById("taskTitle4").innerHTML;
let taskTitle5 = document.getElementById("taskTitle5").innerHTML;


//カウントダウンタイマー関係
//時間格納用
let minTime = 1;
let secTime = 10;

//タイマー停止用
let interval;

//falseかtrueかで、作業時間と休憩時間を変更する
let changeTime = false;



//minとsecにタイマー表示
function progressMin(){
  document.getElementById("min").textContent = minTime + "分";
};

function progressSec() {
  document.getElementById("sec").textContent = secTime + "秒";
};

progressMin();
progressSec();




//タスク作成押下後、タスク作成モーダル展開
document.getElementById("taskCreation").addEventListener('click', function() {
  taskModal.classList.add("active");
  black.classList.add("active");
});

document.querySelector(".timerStart1").addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = taskTitle1;
});

document.querySelector(".timerStart2").addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = taskTitle2;
});

document.querySelector(".timerStart3").addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = taskTitle3;
});

document.querySelector(".timerStart4").addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = taskTitle4;
});

document.querySelector(".timerStart5").addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = taskTitle5;
});

document.getElementById("timerModalClose").addEventListener('click', function() {
  timerModal.classList.remove("active");
  black.classList.remove("active");
});





