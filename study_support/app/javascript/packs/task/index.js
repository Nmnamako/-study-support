const taskModal = document.getElementById("taskModal");
const black = document.getElementById("black");




document.getElementById("taskCreation").addEventListener('click', function() {
  taskModal.classList.add("active");
  black.classList.add("active");
});