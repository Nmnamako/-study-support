
//const taskModal = document.getElementById("taskModal");
//const black = document.getElementById("black");
//const timerModal = document.getElementById("timerModal");


//カウントダウンタイマー関係
//時間格納用
//let minTime = 2;
let secTime = "00";

//タイマー停止用
let interval;

//falseかtrueかで、作業時間と休憩時間を変更する
//let changeTime = false;

//記録時間
//let minRecord = 0;


//クラスの有無判別のため宣言
//const timerStartCheck1 = document.getElementsByClassName("timerStart")[0];
//const timerStartCheck2 = document.getElementsByClassName("timerStart")[1];
//const timerStartCheck3 = document.getElementsByClassName("timerStart")[2];
//const timerStartCheck4 = document.getElementsByClassName("timerStart")[3];
//const timerStartCheck5 = document.getElementsByClassName("timerStart")[4];


//audio関係
//const playAudio = document.getElementById("playAudio")
//
//function audio() {
//  if (minTime == 0 && secTime == 3) {
//    playAudio.play();
//  };
//};

//minとsecにタイマー表示
//function progressMin(){
//  document.getElementById("min").textContent = minTime.toString().padStart(2, '0');
//};

//function progressSec() {
//  document.getElementById("sec").textContent = secTime.toString().padStart(2, '0');
//};

//記録用の関数
//function progressMinRecord() {
//  if (secTime == 0 && changeTime == false) {
//    minRecord++;
//    document.getElementById("elapsedTime").value = minRecord;
//  };
//};
//
////タイマー開始押下時に記録用を0にリセットする
//function minRecordReset() {
//  minRecord = 0;
//  document.getElementById("elapsedTime").value = minRecord;
//};




self.onmessage = function(message) {
  if (`${message.data}` == 'reset')
  reset();
  if (`${message.data}` == 'job') {
   if (interval == null) {
    interval = setInterval(function() {
      secTime--;
      self.postMessage(secTime);
      
      //progressSec();
      //progressMinRecord();
      if (secTime == -1) {
        secTime = 59;
        self.postMessage(secTime); 
      };
    },1000);
  };
  } else if (`${message.data}` == 'stop') {
    stop();
  };
        
        // minTime--;
        //progressSec();
        //progressMin();
        //audio();
        //if (minTime == -1 && changeTime == false ) {
          //次の作業のためにtrueに変更
          //changeTime = true;
          
          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
          //clearInterval(interval);
          //reset();
          //interval = null;
        //} else if (minTime == -1 && changeTime == true) {
          
          //次の休憩のためにfalseに変更
          //changeTime = false;
          
          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
          //clearInterval(interval);
          //reset();
          //interval = null;
        //};
};


function stop() {
  clearInterval(interval);
  interval = null;
};


//reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
function reset() {
  //休憩時間
  secTime = "00";
};


//タスク作成押下後、タスク作成モーダル展開
//document.getElementById("taskCreation").addEventListener('click', function() {
//  taskModal.classList.add("active");
//  black.classList.add("active");
//});
//
//document.getElementById("taskModalClose").addEventListener('click', function(){
//  taskModal.classList.remove("active");
//  black.classList.remove("active");
//});

//document.getElementById("timerModalClose").addEventListener('click', function() {
//  if (interval == null) {
//    timerModal.classList.remove("active");
//    black.classList.remove("active");
//    document.getElementsByClassName("confirmation")[0].classList.remove("active")
//  } else {
//    document.getElementsByClassName("confirmation")[0].classList.add("active")
//  };
//});


//これより下には何も記述しないこと
//タスクが5個ないとエラーが起きコードが実行されないため
//if構文でエラー解消,クラスがなければ処理を実行しないように修正
//検証にてエラー確認if構文の削除か修正どちらかを行う
//document.getElementsByClassName("timerStart")[0].addEventListener('click', function() {
//  //reset();
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[0].innerHTML;
//  taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[0].innerHTML;
//  start();
//  minRecordReset();
//  idAcquisition1.value = document.getElementsByClassName("taskId")[0].innerHTML;
//});
//
//
//document.getElementsByClassName("timerStart")[1].addEventListener('click', function() {
//  reset();
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[1].innerHTML;
//  taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[1].innerHTML;
//  start();
//  minRecordReset();
//  idAcquisition1.value = document.getElementsByClassName("taskId")[1].innerHTML
//});
//
//
//document.getElementsByClassName("timerStart")[2].addEventListener('click', function() {
//  reset();
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[2].innerHTML;
//  taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[2].innerHTML;
//  start();
//  minRecordReset();
//  idAcquisition1.value = document.getElementsByClassName("taskId")[2].innerHTML
//});
//
//
//document.getElementsByClassName("timerStart")[3].addEventListener('click', function() {
//  reset();
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[3].innerHTML;
//  taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[3].innerHTML;
//  start();
//  minRecordReset();
//  idAcquisition1.value = document.getElementsByClassName("taskId")[3].innerHTML
//});
//
//
//document.getElementsByClassName("timerStart")[4].addEventListener('click', function() {
//  reset();
//  timerModal.classList.add("active");
//  black.classList.add("active");
//  taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[4].innerHTML;
//  taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[4].innerHTML;
//  start();
//  minRecordReset();
//  idAcquisition1.value = document.getElementsByClassName("taskId")[4].innerHTML
//});