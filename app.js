$(document).ready(onReady);

function onReady() {
  $('.js-generate-btn').on('click', appendDiv);
}

function appendDiv() {
  $('#allthedivs').append(`<div></div>`);
  console.log('divs');
}
