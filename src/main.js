import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { findTrails, findDistance } from './scripts';

$(document).ready(function() {

  $("#searchNearby").click(function() {
    $("#hikesNearby").slideDown();
    $("#intro").hide();
  });

  $("#searchDestination").click(function() {
    $("#searchByPlace").slideDown();
    $("#intro").hide();
  });

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
          if (trails[i].length > maxHikeDistance){
            $("#display-results").append(`${trails[i].name}<br>${trails[i].location}<br>${trails[i].length} mile hike<br>lat: ${trails[i].latitude}, lon: ${trails[i].longitude}<p></p>`);
          }
        }
      },
      function(error) {
        $("#display-results").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
        $("#display-div").show();
      });

    findDistance()
      .then((response) => {

      });
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
