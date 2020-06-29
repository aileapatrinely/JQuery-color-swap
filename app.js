$(document).ready(onReady);

let clickCount = 0;

function onReady() {
  $('.js-generate-btn').on('click', appendDiv);
}

function appendDiv() {
  clickCount++;

  $('#allthedivs').append(`<div>
  <p>${clickCount}</p>
  </div>`);
}
