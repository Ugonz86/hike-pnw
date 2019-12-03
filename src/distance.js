const MAPS_API_KEY = process.env.MAPS_API_KEY;

export function findDistance(origins, destinations) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    const endPoint = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    let url = `${endPoint}key=${MAPS_API_KEY}&origins=${origins}&destinations=${destinations}&mode=driving&language=en=EN&sensor=false`;

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
// function myMap() {
// var mapProp= {
//   center:new google.maps.LatLng(51.508742,-0.120850),
//   zoom:5,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }


// DO NOT DELETE ***
// https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAvFCJKgy7K2teHQaBBT9pECX1_HcrY-E0&origins=47.6062,-122.3321&destinations=37.7749,-122.4194&mode=driving&language=en=EN&sensor=false
