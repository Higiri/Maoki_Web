$(function() {
  var containerEl = document.querySelector('.mix-wrapper');
  var mixer = mixitup(containerEl);
});

$(document).on('click', '.trigger', function () {
  $('.trigger').removeClass('active');
  $(this).addClass('active');
});