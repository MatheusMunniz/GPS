$(document).ready(function() {
    $('.custom-control-input').change(function() {
      if ($(this).is(':checked')) {
        $(this).closest('.list-group-item').find('.expandable-section').slideDown();
      } else {
        $(this).closest('.list-group-item').find('.expandable-section').slideUp();
      }
    });
  });