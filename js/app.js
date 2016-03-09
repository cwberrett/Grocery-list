//Function definitions
//This function adds the item from the input
function addItem() {
	var item = $('#entry').val();
	if(item.length === 0){
		alert("You need to enter an item before adding to the list.")
	}
	else {
		$(".list ul").append('<li><button class="checkbox">✓</button><span class="list-item">' + item + '</span><button class="delete">x</button></li>');

		$('#entry').val('')
	}
};
//Check item
function checkItem(){
	$(this).parent().toggleClass('checked');
}
//delete item
function deleteItem(){
	$(this).parent().remove();
}
//clear list
function clearList(){
	//alert("clearList has been activated");
	$('.list ul').empty();
}






//functions usage
$(document).ready(function(){

	//on click on #addItem button, activate addItem() function
	$('#add-item').click(function() {
		addItem();
	});

	//on click button class="delete-all" activate clearList() function
	$('.delete-all').click(function() {
	clearList();
	});
});


//allows use of the enter key to add items
$(document).keyup(function(x){
	if(x.keyCode == 13){
		addItem();
		}
});

$(document).keyup(function(x){
	if(x.keyCode == 46 || x.keyCode ==8){
		clearList();
		}
});


	//on click button class="checkbox" activate checkItem() function
$(document).on('click', '.checkbox', checkItem);
	//on click buttton class="delete" activate deleteItem() function
$(document).on('click', '.delete', deleteItem);