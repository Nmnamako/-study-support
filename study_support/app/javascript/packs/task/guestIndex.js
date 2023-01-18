
//カウントダウンタイマー関係
//時間格納用
let guestMinTime = 25;
let guestSecTime = "00";

//タイマー停止用
let guestInterval;

//falseかtrueかで、作業時間と休憩時間を変更する
let guestChangeTime = false;

function progressGuestMin() {
  document.getElementById("guestMin").textContent = guestMinTime;
};

function progressGuestSin() {
  document.getElementById("guestSec").textContent = guestSecTime;
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
        if (guestMinTime == -1 && guestChangeTime == false ){
          
          //次の作業のためにtrueに変更
          guestChangeTime = true;
          clearInterval(guestInterval);
          guestReset();
          guestInterval = null;
          
          //alertだが、音で知らせてノーストップで時間を進める予定
          alert("休憩時間です");
        } else if (guestMinTime == -1 && guestChangeTime == true) {
          
          //次の休憩のためにfalseに変更
          guestChangeTime = false;
          clearInterval(guestInterval);
          guestReset();
          guestInterval = null;
          alert("開始時間です");
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