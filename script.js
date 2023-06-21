const redLight = document.getElementById("red-light");
const orangeLight = document.getElementById("orange-light");
const greenLight = document.getElementById("green-light");

function startSignal() {
  setTimeout(function () {
      redLight.style.opacity = 1;
      orangeLight.style.opacity = 0;
      greenLight.style.opacity = 0;
      redLight.style.display = 'block';
    }, 1000);

  setTimeout(function () {
      redLight.style.opacity = 0;
      orangeLight.style.opacity = 1;
      greenLight.style.opacity = 0;
      orangeLight.style.display = "block";
  }, 4000);

  setTimeout(function () {
      redLight.style.opacity = 0;
      orangeLight.style.opacity = 0;
      greenLight.style.opacity = 1;
      greenLight.style.display = "block";
  }, 8000);
}
const mainTimer = setInterval(function () {
  startSignal();
}, 12000);

startSignal();
