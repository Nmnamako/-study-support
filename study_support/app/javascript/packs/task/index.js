const taskModal = document.getElementById("taskModal");
const black = document.getElementById("black");
const timerModal = document.getElementById("timerModal");
let taskTitleShow = document.getElementById("taskTitleShow")


//.innerHTMLをつけることで[object HTMLSpanElement]の出力を回避する
//コードが長くなるので、taskTitle1などで省略するため宣言をした
//let taskTitle1 = document.getElementById("taskTitle1").innerHTML;
//let taskTitle2 = document.getElementById("taskTitle2").innerHTML;
//let taskTitle3 = document.getElementById("taskTitle3").innerHTML;
//let taskTitle4 = document.getElementById("taskTitle4").innerHTML;
//let taskTitle5 = document.getElementById("taskTitle5").innerHTML;


//カウントダウンタイマー関係
//時間格納用
let minTime = 25;
let secTime = "00";

//タイマー停止用
let interval;

//falseかtrueかで、作業時間と休憩時間を変更する
let changeTime = false;


//タスク
//let aaa = {};
//window.onload = function() {
//  let taskList = document.getElementsByTagName("taskList")
//  for (let i=0; i < taskList.length; i++) {
//    document.getElementsByClassName("taskTitle")
//  };
//};


//minとsecにタイマー表示
function progressMin(){
  document.getElementById("min").textContent = minTime;
};

function progressSec() {
  document.getElementById("sec").textContent = secTime;
};

progressMin();
progressSec();

function start() {
  reset();
  if (interval == null) {
    interval = setInterval(function(){
      secTime--;
      progressSec();
      if (secTime == -1){
        secTime = 59;
        minTime--;
        progressSec();
        progressMin();
        if (minTime == -1 && changeTime == false ){
          
          //次の作業のためにtrueに変更
          changeTime = true;
          clearInterval(interval);
          reset();
          interval = null;
          
          //alertだが、音で知らせてノーストップで時間を進める予定
          alert("休憩時間です");
        } else if (minTime == -1 && changeTime == true) {
          
          //次の休憩のためにfalseに変更
          changeTime = false;
          clearInterval(interval);
          reset();
          interval = null;
          alert("開始時間です");
        };
      };
    },1000);
  };
};

function stop() {
  clearInterval(interval);
  interval = null;
};

//reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
function reset() {
  if (changeTime == true) {
    //休憩時間
    minTime = 5;
    secTime = "00";
    progressSec();
    progressMin();
  } else {
    //作業時間
    minTime = 25;
    secTime = "00";
    progressSec();
    progressMin();
  };
};

document.getElementById("start").addEventListener('click', function(){
  start();
});

document.getElementById("stop").addEventListener('click', function(){
  stop();
});



//タスク作成押下後、タスク作成モーダル展開
document.getElementById("taskCreation").addEventListener('click', function() {
  taskModal.classList.add("active");
  black.classList.add("active");
});

document.getElementById("taskModalClose").addEventListener('click', function(){
  taskModal.classList.remove("active");
  black.classList.remove("active");
});

document.getElementById("timerModalClose").addEventListener('click', function() {
  timerModal.classList.remove("active");
  black.classList.remove("active");
});



//これより下には何も記述しないこと
//タスクが5個ないとエラーが起きコードが実行されないため
document.getElementsByClassName("timerStart")[0].addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[0].innerHTML;
  start();
});

document.getElementsByClassName("timerStart")[1].addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[1].innerHTML;
  start();
});

document.getElementsByClassName("timerStart")[2].addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[2].innerHTML;
  start();
});

document.getElementsByClassName("timerStart")[3].addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[3].innerHTML;
  start();
});

document.getElementsByClassName("timerStart")[4].addEventListener('click', function() {
  timerModal.classList.add("active");
  black.classList.add("active");
  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[4].innerHTML;
  start();
});





//各タスクの開始ボタンを機能
//document.querySelector(".timerStart1").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = taskTitle1;
//  start();
//});
//
//document.querySelector(".timerStart2").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = taskTitle2;
//  start();
//});
//
//document.querySelector(".timerStart3").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = taskTitle3;
//  start();
//});
//
//document.querySelector(".timerStart4").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = taskTitle4;
//  start();
//});
//
//document.querySelector(".timerStart5").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = taskTitle5;
//  start();
//});