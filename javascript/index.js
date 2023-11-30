function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity + "')"
    : "none";
}
function updateLiveTime(city) {
  var now = moment().tz(city);
  var liveTime = now.format("h:mm:ss A");
  document.getElementById("liveTime" + city.replace(" ", "")).textContent =
    "Live Time: " + liveTime;
}
function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity + "')"
    : "none";

  updateLiveTime(selectedCity);
}
