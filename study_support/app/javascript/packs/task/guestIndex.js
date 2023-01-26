//$(document).ready(function(){
//  if ($('#guest').length){
//    // 要素があればここを実行
//  }
  
if (document.getElementById('guestTimerModal')) {
  let worker = new Worker("/time.js");
  //カウントダウンタイマー関係
  //時間格納用
  let guestMinTime = 25;
  let guestSecTime = "00";
  
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
  
  function progressGuestSec() {
    document.getElementById("guestSec").textContent = guestSecTime.toString().padStart(2, '0');
  };
  
  
  progressGuestMin();
  progressGuestSec();
  
  
  function guestStart() {
    if (guestInterval == null) {
      guestInterval = setInterval(function() {
        guestSecTime--;
        audio();
        progressGuestSec();
        if (guestSecTime == -1 ) {
          guestSecTime = 59;
          guestMinTime--;
          progressGuestSec();
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
      },1000);
    };
  };
  
  
  function guestStop() {
    clearInterval(guestInterval);
    guestInterval = null;
  };
  
  
  function guestReset() {
    if (guestChangeTime == true) {
      //休憩時間
      guestMinTime = 5;
      guestSecTime = "00";
      progressGuestMin();
      progressGuestSec();
    } else {
      //作業時間
      guestMinTime = 25;
      guestSecTime = "00";
      progressGuestMin();
      progressGuestSec();
    };
  };
  
  document.getElementById("guestStart").addEventListener('click', function(){
    guestStart();
    //worker.postMessage('job');
  });
  
  document.getElementById("guestStop").addEventListener('click', function(){
    guestStop();
    //worker.postMessage('stop');
  });
} else {
  
}


//});