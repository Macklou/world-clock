function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity + "')"
    : "none";

  updateLiveTime(selectedCity);
}

function updateTime() {
  let londonElement = document.querySelector("#London"); // Update ID to match exactly

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

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
