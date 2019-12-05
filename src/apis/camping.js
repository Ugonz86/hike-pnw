// const API_KEY = process.env.API_KEY;
//
// export function findCampgrounds(lat, long){
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//
//       const endPoint = "https://www.hikingproject.com/data/get-campgrounds?";
//       let url = `${endPoint}lat=${lat}&lon=${long}&maxDistance=50&key=${API_KEY}&maxResults=10&sort=distance`;
//
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         }
//         else {
//           reject(Error(request.statusText));
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
