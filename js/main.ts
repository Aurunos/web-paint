let myCanvas = document.getElementById("main-canvas");
myCanvas.addEventListener("click", function (event) {

  alert(`I have been clicked at ${event.x}, ${event.y}!`);
});

let mainToolbar = document.getElementById("toolbar");
mainToolbar.addEventListener("mouseleave", function () {
  this.style.transition = '0.8s';
  this.style.opacity = "0";
});
mainToolbar.addEventListener("mouseenter", function () {
  this.style.transition = '0.8s';
  this.style.opacity = "1";
});

