function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('" + selectedCity + "')"
    : "none";
}
