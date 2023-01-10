const taskModal = document.getElementById("taskModal");
const black = document.getElementById("black");
const timerModal = document.getElementById("timerModal");
let taskTitleShow = document.getElementById("taskTitleShow")


//.innerHTMLをつけることで[object HTMLSpanElement]の出力を回避する
let taskTitle1 = document.getElementById("taskTitle1").innerHTML;
let taskTitle2= document.getElementById("taskTitle2").innerHTML;

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
});

document.getElementById("timerModalClose").addEventListener('click', function() {
  timerModal.classList.remove("active");
  black.classList.remove("active");
});

//タイマー開始押下後、タイマーモーダル展開
//document.getElementById("timerStart").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//});