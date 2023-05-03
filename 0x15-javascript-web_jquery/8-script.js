<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
      $(document).ready(function() {
        const listMoviesUl = $('#list_movies');
        $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
          $.each(data.results, function(i, movie) {
            const listItem = $('<li>', { text: movie.title });
            listMoviesUl.append(listItem);
          });
        });
      });
    </script>
  </head>
  <body>
    <ul id="list_movies">Loading...</ul>
  </body>
</html>
