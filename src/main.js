import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { findTrails } from './trails';
// import { findDistance } from './distance';

$(document).ready(function() {

  $("#searchNearby").click(function() {
    $("#hikesNearby").slideDown();
    $("#intro").hide();
  });

  $("#searchDestination").click(function() {
    $("#searchByPlace").slideDown();
    $("#intro").hide();
  });

  // $("#directionsButton").click(function() {
  //   $("#map-canvas").show();
  //   $("#searchByPlace").hide();
  //   window.onload = function WindowLoad(event) {
  //     var myLatlng = new google.maps.LatLng(-34.397, 150.644);
  //     var myOptions = {
  //      zoom: 8,
  //      center: myLatlng,
  //      mapTypeId: google.maps.MapTypeId.ROADMAP
  //    };
  //     var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  //   };
  // });

  $("#find-trails").click(function () {
    $("#resultsDiv").slideDown("ease");
    $("#hikesNearby").hide();
    let maxHikeDistance = $("input#trail-distance").val();
    $("input#trail-distance").val("");

    findTrails()
      .then((response) => {
        $("#display-results").empty();

        const body = JSON.parse(response);
        const trails = body.trails;
        for (let i in trails){
          if (trails[i].length < maxHikeDistance){
            $("#display-results").append(`${trails[i].name}<br>${trails[i].location}<br>${trails[i].length} mile hike<br>lat: ${trails[i].latitude}, lon: ${trails[i].longitude}<p></p>`);
          }
        }
      },
      function(error) {
        $("#display-results").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
        $("#display-div").show();
      });

    // findDistance()
    //   .then((response) => {
    //     $("#display-results").empty();
    //
    //     const body = JSON.parse(response);
    //     const origin_addresses = body.origin_addresses;
    //     const destination_addresses = body.destination_addresses;
    //     const rows = body.rows;
    //     for (let i in rows){
    //       if (rows[i].length > maxHikeDistance){
    //         $("#display-results").append(`${body.origin_addresses}<br>${body.destination_addresses}<br>${rows.elements[i].distance}<br>${rows.elements[i].duration}<p></p>`);
    //       }
    //     }
    //   });
  });

  $("#goHome").click(function() {
    $("#resultsDiv").hide();
    $("#intro").slideDown();
    // $("#display-results").html('');
  });

  $("#goHome2").click(function() {
    $("#searchByPlace").hide();
    $("#intro").slideDown();
  });
});
