function changeBackground() {
  var citySelector = document.getElementById("citySelector");
  var selectedCity = citySelector.options[citySelector.selectedIndex].value;
  document.body.style.backgroundImage = selectedCity
    ? "url('css/" + selectedCity + "')"
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

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
        <div class="city" id="${cityName}">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelector");
citiesSelectElement.addEventListener("change", changeBackground);
citiesSelectElement.addEventListener("change", updateCity);
