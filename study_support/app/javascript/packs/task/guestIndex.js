//$(document).ready(function(){
//  if ($('#guest').length){
//    // 要素があればここを実行
//  }

let worker = new Worker("time.js");
  
if (document.getElementById('guestTimerModal')) {
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
  
  function progressGuestSin() {
    document.getElementById("guestSec").textContent = guestSecTime.toString().padStart(2, '0');
  };
  
  
  progressGuestMin();
  progressGuestSin();
  
  
  function guestStart() {
    if (guestInterval == null) {
      guestInterval = setInterval(function(){
        guestSecTime--;
        progressGuestSin();
        if (guestSecTime == -1){
          guestSecTime = 59;
          guestMinTime--;
          progressGuestMin()
          progressGuestSin();
          audio();
          if (guestMinTime == -1 && guestChangeTime == false ){
            
            //次の作業のためにtrueに変更
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
      progressGuestSin();
    } else {
      //作業時間
      guestMinTime = 25;
      guestSecTime = "00";
      progressGuestMin();
      progressGuestSin();
    };
  };
  
  document.getElementById("guestStart").addEventListener('click', function(){
    guestStart();
  });
  
  document.getElementById("guestStop").addEventListener('click', function(){
    guestStop();
  });
} else {
  
}


//});