const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


export function findWeather(coordinates, inputDate) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    let unixTime = "1575468000";
    let date = inputDate;

    const cors = "https://cors-anywhere.herokuapp.com/";
    let url = `${cors}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coordinates},${unixTime}?date=${date}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}
