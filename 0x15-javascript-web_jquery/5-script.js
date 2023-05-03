<!DOCTYPE html>
	<html>
	<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script>
	$(document).ready(function() {
		const addItem =$('#add_item'):
		addItem.click(function() {
			const myList = $('ul.my_list');
			const newItem = $('<li>Item</li>');
			myList.append(newItem);
		});
	});
</script>
	</head>
	<body>
	<div id="add_item">Add item to List</div>
	<ul class="my_list">
	 <li>First item</li>
	 <li>Second item</li>
	<li>Third item</li>
	</ul>
	</body>
	</html>
