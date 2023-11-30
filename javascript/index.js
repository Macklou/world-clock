function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity + "')"
    : "none";

  function updateCity() {
    let citySelector = document.getElementById("citySelector");
    let selectedCity = citySelector.options[citySelector.selectedIndex].value;
    let cityName = selectedCity.split("/")[1];

    let cityTime = moment().tz(selectedCity);
    let citiesElement = document.getElementById("cities");

    citiesElement.innerHTML = `
    <div class="city" id="${cityName.toLowerCase()}">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
  `;
  }

  // Initial update
  updateCity();

  // Update time every second
  setInterval(updateCity, 1000);
}
