// Define a Function
function sayOuch() {
	alert('Ouch! Stop poking me!');
}
	
// Use a CSS selector to identify an element
var HarImage = document.querySelector('img');
	
// Assign the function to the onclick event on that element
HarImage.onclick = sayOuch;