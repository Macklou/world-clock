function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedOption = citySelector.options[citySelector.selectedIndex];
  var selectedCity = selectedOption.getAttribute("data-image");

  document.body.style.backgroundImage = selectedCity
    ? "url('" + selectedCity + "')"
    : "none";

  updateCityInfo(selectedOption.value);
}

function updateCityInfo(city) {}
