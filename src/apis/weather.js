const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export function findWeather(coordinates, date) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    const cors = "https://cors-anywhere.herokuapp.com/";
    let url = `${cors}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coordinates},${date}T00:00:00`;

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
