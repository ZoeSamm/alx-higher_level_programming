$(document).ready(function() {
  function getTranslation() {
    const languageCode = $('#language_code').val();
    $.get(`https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`, function(data) {
      $('#hello').text(data.hello);
    });
  }

  $('#btn_translate').click(getTranslation);
  $('#language_code').keydown(function(e) {
    if (e.keyCode === 13) {
      getTranslation();
    }
  });
});
