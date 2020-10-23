'use strict';


function watchForm() {
  $('#js-form').submit(event => {
    event.preventDefault();
    const numberOfParks = $('#search-qty').val();
    const desiredState = $('#search-state').val();
    console.log(numberOfParks);
    console.log(desiredState);
    if (!numberOfParks && !desiredState) {
      getResults("10", "ca");
    } else {
      getResults(numberOfParks, desiredState);
    }
  });
}

function getResults(numberOfParks, desiredState) {
  console.log(numberOfParks);
  console.log(desiredState);
  fetch(`https://developer.nps.gov/api/v1/parks?api_key=LjDGflPb5rpTne1YebbvKcvQv3UOczyGWZfXyJ0l&stateCode=${desiredState}&limit=${numberOfParks}`)
    .then(response => {
      if (response.ok) {
        response.json().then(function(responseJson) {
          displayResults(responseJson);
        });
      } 
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  let searchResults = responseJson['data']; 
  for (let i = 0; i < searchResults.length; i++) {
   $('#results-list').append(
     `<li><h3>${searchResults[i].fullName}</h3>
      <p><a href="${searchResults[i].directionsUrl}">${searchResults[i].description}</a></p>
      <p>${searchResults[i].url}</p>
      </li>`
      )
  };
  $('#results').removeClass('hidden');
};

$(document).ready(function() {
  watchForm();
 });
