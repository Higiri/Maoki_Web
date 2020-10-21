/*
 *
 */

$(function () {
    $('.filter').filterizr();
    var filterSingle = $('.filter').filterizr({
        layout: 'sameWidth',
        elay: 0, // Transition delay in ms
        delayMode: 'progressive', // 'progressive' or 'alternate'
        easing: 'ease-out',
        // +
        spinner: { // Configuration for built-in spinner
            enabled: false,
            fillColor: '#2184D0',
            styles: {
              height: '75px',
              margin: '0 auto',
              width: '75px',
              'z-index': 2,
            },
          },
        // +
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




