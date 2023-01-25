//$(document).ready(function(){
//  if ($('#guest').length){
//    // 要素があればここを実行
//  }
  
if (document.getElementById('guestTimerModal')) {
  let worker = new Worker("time.js");
  //カウントダウンタイマー関係
  //時間格納用
  let guestMinTime = 25;
  let guestSecTime = "00";
  let sec = "00";
  
  //タイマー停止用
  let guestInterval;
  
  //falseかtrueかで、作業時間と休憩時間を変更する
  let guestChangeTime = false;
  
  //audio関係
  const playAudio = document.getElementById("playAudio")
  
  function audio() {
    if (guestMinTime == 0 && guestSecTime == 3) {
      playAudio.play();
    };
  }
  
  function progressGuestMin() {
    document.getElementById("guestMin").textContent = guestMinTime.toString().padStart(2, '0');
  };
  
  function progressGuestSin() {
    document.getElementById("guestSec").textContent = guestSecTime.toString().padStart(2, '0');
  };
  
  
  progressGuestMin();
  progressGuestSin();
  
  
  function guestStart() {
    worker.onmessage = function (secTime) {
      sec = `${secTime.data}`;
      guestSecTime = sec;
      audio();
      document.getElementById("guestSec").textContent = guestSecTime.toString().padStart(2, '0');
      if (sec == -1 ) {
        guestMinTime--;
        progressGuestMin();
        if (guestMinTime == -1 && guestChangeTime == false ) {
          guestChangeTime = true;
          guestReset();
          guestInterval = null;
        } else if (guestMinTime == -1 && guestChangeTime == true) {
          //次の休憩のためにfalseに変更
          guestChangeTime = false;
          guestReset();
          guestInterval = null;
        };
      };
    };
  };
  
  
  function guestStop() {
    clearInterval(guestInterval);
    guestInterval = null;
  };
  
  
  function guestReset() {
    if (guestChangeTime == true) {
      //休憩時間
      guestMinTime = 4;
      guestSecTime = "00";
      progressGuestMin();
      progressGuestSin();
    } else {
      //作業時間
      guestMinTime = 24;
      guestSecTime = "00";
      progressGuestMin();
      progressGuestSin();
    };
  };
  
  document.getElementById("guestStart").addEventListener('click', function(){
    guestStart();
    worker.postMessage('job');
  });
  
  document.getElementById("guestStop").addEventListener('click', function(){
    worker.postMessage('stop');
  });
} else {
  
}


//});