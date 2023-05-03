<!DOCTYPE html>
	<html>
	<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script>
	$(document).ready(function() {
		const characterDiv =$('#character');
		$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json. f
			characterDiv.text(data.name);
	});
});
</script>
	</head>
	<body>
	<div id="character">Loading...</div>
	</body>
	</html>
