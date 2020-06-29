$(document).ready(onReady);

let clickCount = 0;

function onReady() {
  $('.js-generate-btn').on('click', appendDiv);
}

function appendDiv() {
  clickCount++;

  $('#allthedivs').append(`<div>
  <p>${clickCount}</p><button class="yellow-btn">Yellow</button><button class="delete-da-btn">Delete</button>
  </div>`);
}
