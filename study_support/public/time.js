//カウントダウンタイマー関係
//時間格納用
let secTime = "00";

//タイマー停止用
let interval;

// index.jsからメッセージ受け取り稼働
// タイマー関係
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
  // 受信したメッセージの内容がstopならタイマー停止
  } else if (`${message.data}` == 'stop') {
    stop();
  };
};

// タイマー停止
function stop() {
  clearInterval(interval);
  interval = null;
};


//reset()内でchangeTimeの中身次第で作業時間と休憩時間を切り替える
function reset() {
  //休憩時間
  secTime = "00";
};