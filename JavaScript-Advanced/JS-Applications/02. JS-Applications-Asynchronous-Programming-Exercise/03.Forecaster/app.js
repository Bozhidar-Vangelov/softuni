function attachEvents() {
  //gets html elements
  const getWeatherButton = document.getElementById("submit");
  getWeatherButton.style.cursor = "pointer";
  const locationInput = document.getElementById("location");
  const forecastDiv = document.getElementById("forecast");
  const currentDiv = document.getElementById("current");
  const upcomingDiv = document.getElementById("upcoming");

  const weatherUrl = "http://localhost:3030/jsonstore/forecaster/locations";

  //transofrms conditions strings to symbols
  let forecastSigns = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
  };

  getWeatherButton.addEventListener("click", getWeatherHandler);

  //creates weather button logic
  async function getWeatherHandler() {
    try {
      //makes request and parses response
      let weatherRequest = await fetch(weatherUrl);
      let weather = await weatherRequest.json();

      //gets location and it's code
      const locationValue = locationInput.value;
      let locationCode = weather.filter((loc) => loc.name === locationValue)[0]
        .code;

      const todayWeathernUrl = `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`;
      const upcomingWeatherUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`;

      //makes 2 requests and parses responses
      let todayWeatherRequest = await fetch(todayWeathernUrl);
      let todayWeather = await todayWeatherRequest.json();
      let upcomingWeatherRequest = await fetch(upcomingWeatherUrl);
      let upcomingWeather = await upcomingWeatherRequest.json();

      //unhides forecast div
      forecastDiv.style.display = "block";

      //clears previous data if available
      currentDiv.innerHTML = "";
      upcomingDiv.innerHTML = "";
      let todayForecast = todayWeather.forecast;

      //creates today's forecast html elements
      let todayHtml = create(
        "div",
        ["class", "forecasts"],
        create(
          "span",
          ["class", "condition symbol"],
          forecastSigns[todayForecast.condition]
        ),
        create(
          "span",
          ["class", "condition"],
          create("span", ["class", "forecast-data"], todayWeather.name),
          create(
            "span",
            ["class", "forecast-data"],
            `${todayForecast.low}°/${todayForecast.high}°`
          ),
          create("span", ["class", "forecast-data"], todayForecast.condition)
        )
      );

      let upcomingForecast = upcomingWeather.forecast;

      currentDiv.appendChild(todayHtml);

      //creates upcoming's forecast html elements
      upcomingForecast.forEach((day) => {
        let upcomingHtml = create(
          "div",
          ["class", "forecasts"],
          create(
            "span",
            ["class", "condition symbol"],
            forecastSigns[day.condition]
          ),
          create(
            "span",
            ["class", "condition"],
            create("span", ["class", "forecast-data"], upcomingWeather.name),
            create(
              "span",
              ["class", "forecast-data"],
              `${day.low}°/${day.high}°`
            ),
            create("span", ["class", "forecast-data"], day.condition)
          )
        );

        upcomingDiv.appendChild(upcomingHtml);
      });
    } catch {
      forecastDiv.innerHTML = "Error";
    }
  }

  function create(type, ...content) {
    const el = document.createElement(type);
    content.map((c) =>
      typeof c === "string"
        ? (el.textContent = c)
        : Array.isArray(c)
        ? el.setAttribute(c[0], c[1])
        : el.appendChild(c)
    );
    return el;
  }
}

attachEvents();
