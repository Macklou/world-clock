function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity.replace("/", "_").toLowerCase() + ".jpg')"
    : "none";

  updateCity();
}

function updateTime(cityId, timeZone) {
  let cityElement = document.querySelector(`#${cityId}`);
  if (cityElement) {
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let cityTime = moment().tz(timeZone);

    dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    timeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity() {
  let citySelector = document.getElementById("citySelector");
  let cityTimeZone = citySelector.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1].toLowerCase();
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  let cityInfoDiv = document.createElement("div");
  cityInfoDiv.classList.add("city");
  cityInfoDiv.id = cityName;
  cityInfoDiv.innerHTML = `
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  `;

  citiesElement.innerHTML = "";
  citiesElement.appendChild(cityInfoDiv);

  document.body.style.backgroundImage = cityTimeZone
    ? "url('css/" + cityName.toLowerCase() + ".jpg')"
    : "none";
}

let citiesSelectElement = document.querySelector("#citySelector");
citiesSelectElement.addEventListener("change", changeBackground);
citiesSelectElement.addEventListener("change", updateCity);

document.addEventListener("DOMContentLoaded", function () {
  updateCity();
  setInterval(updateCity, 1000);
});
updateTime();
setInterval(updateTime, 1000);
