'use strict';

REWORK FUNCTIONS, WHAT VARIABLES NEED GLOBAL SCOPE 


function watchForm() {
$('form').submit(event => {
    event.preventDefault();
   
  });
}

function getResults(){
 console.log(parameter(s));
 fetch(`____`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults() {
 console.log(responseJson);
  $('#results-list').empty();
  let searchResults = responseJson.message;
  for (let i = 0; i < responseJson.length; i++) {
    $('#results-list').append(
      `<li><h3>${responseJson[i].name}</h3>
      <p><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></p>
      </li>`
    )};
    $('#results').removeClass('hidden');
  };






