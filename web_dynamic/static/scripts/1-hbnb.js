window.onload = function () {
  const amenities_dict = {}
  $("input:checkbox:checked").each(function () {
    amenities_dict[$(this).attr('data-id')] = $(this).attr('data-name');
    $('.amenities h4').text(Object.values(amenities_dict).join(', '));
  });
  $("input:checkbox:unchecked").each(function () {
    delete amenities_dict[$(this).attr('data-id')];
    if (Object.values(amenities_dict) === 0) {
      $('.amenitites h4').html("&nbsp;");
    } else {
      $('.amenities h4').text(Object.values(amenities_dict).join(', '));
    }
  });
};
