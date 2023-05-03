<!DOCTYPE html>
<html>
	<head>
	  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	  <script>
	  $(document).ready(function() {
          const reddHeader = $('#red_header');
          redHeader.click(function() {
	  const header = $('header');
	  header.css('color', '#FF0000');
          });
          });
         </script>
	</head>
	<body>
	  <div id="red-header">CLICK ME!</div>
	  <header>
	     <h1>Hello, world!</h1>
	  </header>
	</body>
	</html>
