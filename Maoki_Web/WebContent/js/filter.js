$(document).ready(function() {
  $('.trigger').click(function() {
    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filter').show('1');
    } else {
      $('.filter').not('.'+value).hide('1');
      $('.filter').filter('.'+value).show('1');
    }
    $(document).on('click', '.trigger', function () {
      $('.trigger').removeClass('active');
      $(this).addClass('active');
    });
  })
})
