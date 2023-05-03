<!DOCTYPE html>
	<html>
	<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script>
	$(document).ready(function() {
		const toggleHeader = $('#toggle_header');
		togglrHeader.click(function() {
			const header = $('header');
			if (header.hasClass('red')) {
				header.removeClass('red').addClass('green');}else{
					header.removeClass('green').addClass('red');}
		});
	});
</script>
	<style>
	.red {
		color: #FF0000:
	}
.green {
	color: #00FF00;
}
</style>
	</head>
	<body>
	<div id="toggle_header">Toggle header class</div>
	<header class="red">
	<h1>Hello,world!</h1>
	</header>
	</body>
	</html>
