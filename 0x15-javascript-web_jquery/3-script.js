<!DOCTYPE html>
	<html>
	<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script>
	$(document).ready(function() {
	const redHeader = $('#red_header');
	redHeader.click(function() {
		const header = $('header');
		header.addClass('red');});
	});
</script>
	<style>
	.red {
		color: #FF0000;
	}
</style>
	</head>
	<body>
	<div id="red_header">Click me!</div>
	<header>
	<h1>Hello, world!</h1>
	</header>
	</body>
	</html>
