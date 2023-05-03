<!DOCTYPE html>
	<html>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script>
	$(document).ready(function() {
		const updateHeader = $('#update_header');
		updateHeader.click(function() {
			const header = $('header');
			header text('New Heder!!!');
		});
	});
</script>
	</head>
	<body>
	<div id="update_header">Update header</div>
	<header>Original header text</header>
	</body>
	</html>
