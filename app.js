$(document).ready(onReady);

let clickCount = 0;

function onReady() {
  $('.js-generate-btn').on('click', appendDiv);
  $('#allthedivs').on('click', '.yellow-btn', toggleColor);
  $('#allthedivs').on('click', '.dadiv', deletediv);
}

function appendDiv() {
  clickCount++;

  $('#allthedivs').append(`<div class='dadiv'>
  <p>${clickCount}</p><button class="yellow-btn">Yellow</button><button class="delete-da-btn">Delete</button>
  </div>`);
}

function toggleColor() {
  $(this).parent().toggleClass('yellow');
}

function deletediv() {
  $(this).remove();
}
