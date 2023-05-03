$(document).ready(function() {
  $('#btn_translate').click(function() {
    let langCode = $('#language_code').val();
    let url = 'https://fourtonfish.com/hellosalut/hello/' + langCode;
    $.get(url, function(data) {
      $('#hello').text(data.hello);
    });
  });
});
