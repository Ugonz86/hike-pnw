const API_KEY = process.env.API_KEY;

export function findConditions() {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    const endPoint = "https://www.hikingproject.com/data/get-conditions?ids=&key=${API_KEY}";
    let url = `${endPoint}ids=${ids}&key=${API_KEY}`;

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
