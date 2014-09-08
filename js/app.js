
var shoppingApp = {

	validate: function() {
		// Validates user input

		var item = $('#item').val();
		if ($.trim(item) === "") {
			alert("Please enter something");
		} else {
            return item;
		}
    },

	addItem: function() {
		// Adds item to shopping list
		var item = $("#item").val();
		var checkbox = ('<input type="checkbox">');
		var del = ('<a href="#" id="delete">Delete</a>');
		if(shoppingApp.validate()) {
			$(".uncomplete ul").append('<li>'+checkbox + "  " + item + "  " +del+'</li>');
			$("#item").val("");
		}
		return false;
	},

	submitItem: function(){
		//the add button
		$('#button').click(shoppingApp.addItem());

	},

	deleteItem: function(event) {
		//delete item from the list
		event.preventDefault();
		$(this).parent().remove();
	},


	switching: function(event){
		// switching between both divs
		event.preventDefault();
		if($(this).is(':checked')) {
			$(this).parent().appendTo('.complete ul');
		} else {
			$(this).parent().appendTo('.uncomplete ul');
		}
	},


	initialise: function() {
		$('#button').click(shoppingApp.addItem);
		$(".main ul").on("change", 'input[type=checkbox]', shoppingApp.switching);
		$(".main ul").on("click", "a", shoppingApp.deleteItem);
	},
	
}

$(document).ready(shoppingApp.initialise);