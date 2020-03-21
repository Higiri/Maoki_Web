/*
 *
 */
$(function () {
    $('.filter').filterizr();
    var filterSingle = $('.filter').filterizr({
        layout: 'sameWidth'
    });
});

$(document).on('click', '.trigger', function () {
  $('.trigger').removeClass('active');
  $(this).addClass('active');
});

$(document).on('click', '.sort', function () {
	  $('.sort').removeClass('active');
	  $(this).addClass('active');
	});