var modal = document.getElementById("modal1");
var modal1 = document.getElementById("modal2");
var modalClass = document.getElementsByClassName("modal")[0];
var back = document.getElementsByClassName("close")[0];
var back1 = document.getElementsByClassName("close")[1];
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

btn1.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal1.style.display = "block";
};
btn.onclick = function () {
  modal.style.display = "block";
};

back.onclick = function () {
  modal.style.display = "none";
};
back1.onclick = function () {
  modal1.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
function openModal(evt, modalName) {
  var modalClass = document.getElementsByClassName("modal");
  for (i = 0; i < modalClass.length; i++) {
    modalClass[i].style.display = "none";
  }
  document.getElementById(modalName).style.display = "block";
}
