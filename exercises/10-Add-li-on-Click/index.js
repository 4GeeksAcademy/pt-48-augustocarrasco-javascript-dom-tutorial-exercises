let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.getElementById('myList')
	let aux =  document.createElement('li')
	aux.innerHTML = 'Next Item'
	list.appendChild(aux)
	
});
