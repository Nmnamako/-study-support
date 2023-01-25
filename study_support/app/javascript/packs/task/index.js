
if (document.getElementById('taskCreation')) {
  //$(document).ready(function(){
  // WebWorker作成タイマーをWorkerで計算させるため
  let worker = new Worker("time.js");
  
  const taskModal = document.getElementById("taskModal");
  const black = document.getElementById("black");
  const timerModal = document.getElementById("timerModal");
  let taskTitleShow = document.getElementById("taskTitleShow")
  let taskBodyShow = document.getElementById("taskBodyShow")
  
  let idAcquisition1 = document.getElementById("idAcquisition")
  
  //クラスの有無判別のため宣言
  //const timerStartCheck1 = document.getElementsByClassName("timerStart")[0];
  //const timerStartCheck2 = document.getElementsByClassName("timerStart")[1];
  //const timerStartCheck3 = document.getElementsByClassName("timerStart")[2];
  //const timerStartCheck4 = document.getElementsByClassName("timerStart")[3];
  //const timerStartCheck5 = document.getElementsByClassName("timerStart")[4];
  
  //カウントダウンタイマー関係
  //時間格納用
  let minTime = 25;
  let secTime = "00";
  let sec = "00";
  
  
  //記録時間
  let minRecord = 0;
  
  //タイマー停止用
  let interval;
  
  //falseかtrueかで、作業時間と休憩時間を変更する
  let changeTime = false;
  
  let closeCheck = true;
  //audio関係
  const playAudio = document.getElementById("playAudio")
  
  function audio() {
    if (minTime == 0 && sec == 3) {
      playAudio.play();
    };
  };
  
  
  
  
  // minとsecにタイマー表示
  function progressMin(){
    document.getElementById("min").textContent = minTime.toString().padStart(2, '0');
  };
  
  function progressSec() {
    document.getElementById("sec").textContent = secTime;
  };
  
  progressMin();
  progressSec();
  
  
  //記録用の関数
  function progressMinRecord() {
    if (sec == 0 && changeTime == false) {
      minRecord++;
      document.getElementById("elapsedTime").value = minRecord;
    };
  };
  
  //タイマー開始押下時に記録用を0にリセットする
  function minRecordReset() {
    minRecord = 0;
    document.getElementById("elapsedTime").value = minRecord;
  };
  
  
  function start() {
    worker.onmessage = function (secTime) {
      sec = `${secTime.data}`;
      //minRecordReset();
      secTime = sec;
      progressMinRecord();
      audio();
      document.getElementById("sec").textContent = secTime.toString().padStart(2, '0');
      if (sec == -1 ) {
        minTime--;
        progressMin();
        if (minTime == -1 && changeTime == false ) {
          //次の作業のためにtrueに変更
          changeTime = true;
          reset();
          interval = null;
        } else if (minTime == -1 && changeTime == true) {
          //次の休憩のためにfalseに変更
          changeTime = false;
          reset();
          interval = null;
        };
      };
    };
  //  if (interval == null) {
  //    interval = setInterval(function() {
  //      secTime--;
  //      progressSec();
  //      progressMinRecord();
  //      if (secTime == -1) {
  //        secTime = 3;
  //        minTime--;
  //        progressSec();
  //        progressMin();
  //        audio();
  //        if (minTime == -1 && changeTime == false ) {
  //          //次の作業のためにtrueに変更
  //          changeTime = true;
  //          
  //          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
  //          //clearInterval(interval);
  //          reset();
  //          interval = null;
  //        } else if (minTime == -1 && changeTime == true) {
  //          
  //          //次の休憩のためにfalseに変更
  //          changeTime = false;
  //          
  //          //作業時間と休憩時間の変更時にタイマーを停止する,現状は不要
  //          //clearInterval(interval);
  //          reset();
  //          interval = null;
  //        };
  //      };
  //    },1000);
  //  };
  };
  
  //function stop() {
  //  clearInterval(interval);
  //  interval = null;
  //};
  
  //reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
  function reset() {
    if (changeTime == true) {
      //休憩時間
      minTime = 4;
      secTime = "00";
      progressSec();
      progressMin();
    } else {
      //作業時間
      minTime = 24;
      secTime = "00";
      progressSec();
      progressMin();
    };
  };
  
  document.getElementById("start").addEventListener('click', function(){
    worker.postMessage('job');
    //closeCheck = true;
    //start();
  });
  
  //document.getElementById("stop").addEventListener('click', function(){
  //  stop();
  //});
  
  document.getElementById("stop").addEventListener('click', function(){
    //worker.terminate();
    worker.postMessage('stop');
    //closeCheck = false;
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
  
  //タイマーモーダルを閉じる
  //document.getElementById("timerModalClose").addEventListener('click', function() {
  //  if (closeCheck == false) {
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
  if (document.getElementsByClassName('timerStart')[0]) {
    document.getElementsByClassName("timerStart")[0].addEventListener('click', function() {
      worker.postMessage('job');
      worker.postMessage('reset');
      //minTime = 25;
      timerModal.classList.add("active");
      black.classList.add("active");
      taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[0].innerHTML;
      taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[0].innerHTML;
      
      start();
      minRecordReset();
      idAcquisition1.value = document.getElementsByClassName("taskId")[0].innerHTML;
    });
    } else {
      
  };
  
  if (document.getElementsByClassName('timerStart')[1]) {
    document.getElementsByClassName("timerStart")[1].addEventListener('click', function() {
      worker.postMessage('job');
      worker.postMessage('reset');
      //minTime = 25;
      timerModal.classList.add("active");
      black.classList.add("active");
      taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[1].innerHTML;
      taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[1].innerHTML;
      start();
      minRecordReset();
      idAcquisition1.value = document.getElementsByClassName("taskId")[1].innerHTML
    });
    } else {
      
  };
  
  if (document.getElementsByClassName('timerStart')[2]) {
    document.getElementsByClassName("timerStart")[2].addEventListener('click', function() {
      worker.postMessage('job');
      worker.postMessage('reset');
      //minTime = 25;
      timerModal.classList.add("active");
      black.classList.add("active");
      taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[2].innerHTML;
      taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[2].innerHTML;
      start();
      minRecordReset();
      idAcquisition1.value = document.getElementsByClassName("taskId")[2].innerHTML
    });
  } else {
    
  };
  
  if (document.getElementsByClassName('timerStart')[3]) {
    document.getElementsByClassName("timerStart")[3].addEventListener('click', function() {
      worker.postMessage('job');
      worker.postMessage('reset');
      //minTime = 25;
      timerModal.classList.add("active");
      black.classList.add("active");
      taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[3].innerHTML;
      taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[3].innerHTML;
      start();
      minRecordReset();
      idAcquisition1.value = document.getElementsByClassName("taskId")[3].innerHTML
    });
  } else {
    
  };
  
  if (document.getElementsByClassName('timerStart')[4]) {
    document.getElementsByClassName("timerStart")[4].addEventListener('click', function() {
      worker.postMessage('job');
      worker.postMessage('reset');
      //minTime = 25;
      timerModal.classList.add("active");
      black.classList.add("active");
      taskTitleShow.innerHTML = document.getElementsByClassName("taskTitle")[4].innerHTML;
      taskBodyShow.innerHTML = document.getElementsByClassName("taskBody")[4].innerHTML;
      start();
      minRecordReset();
      idAcquisition1.value = document.getElementsByClassName("taskId")[4].innerHTML
    });
  } else {
    
  };
};
//});