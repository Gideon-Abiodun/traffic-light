function startSignal() {
  const redLight = document.getElementById("red-light");
  const orangeLight = document.getElementById("orange-light");
  const greenLight = document.getElementById("green-light");
  greenLight.style.opacity = 1;
  setTimeout(function () {
    redLight.style.display = 'block';
    redLight.style.opacity = 1;
    orangeLight.style.opacity = 0;
    greenLight.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    orangeLight.style.display = "block";
    redLight.style.opacity = 0;
    orangeLight.style.opacity = 1;
    greenLight.style.opacity = 0;
  }, 4000);

  setTimeout(function () {
    greenLight.style.display = "block";
    redLight.style.opacity = 0;
    orangeLight.style.opacity = 0;
    greenLight.style.opacity = 1;
  }, 8000);
}
var mainTimer = setInterval(function () {
  startSignal();
}, 12000);
startSignal();
