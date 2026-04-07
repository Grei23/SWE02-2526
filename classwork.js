function getData() {
    fetch("https://weather-api167.p.rapidapi.com/api/weather/forecast?place=London%2CGB&cnt=3&units=standard&type=three_hour&mode=json&lang=en", {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "ce83acc2cfmsh7f4ac7fb16edfafp1b5518jsnace0ec00259a",
            "X-RapidAPI-Host": "weather-api167.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
     document.getElementById("result").innerHTML =
      "<p>Temp: " + data.list[0].main.temp + "</p>";
    })
    .catch(error => console.error(error));
   }