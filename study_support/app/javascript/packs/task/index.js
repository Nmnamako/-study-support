const taskModal = document.getElementById("taskModal");
const black = document.getElementById("black");
const timerModal = document.getElementById("timerModal");



//タスク作成押下後、タスク作成モーダル展開
document.getElementById("taskCreation").addEventListener('click', function() {
  taskModal.classList.add("active");
  black.classList.add("active");
});


document.querySelectorAll(".timerStart")[0].addEventListener('click', function() {
  taskModal.classList.add("active");
  black.classList.add("active");
});

//タイマー開始押下後、タイマーモーダル展開
//document.getElementById("timerStart").addEventListener('click', function() {
//  timerModal.classList.add("active");
//  black.classList.add("active");
//});