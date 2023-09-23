let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let hello = document.createElement('div')
	hello.innerHTML = 'Hello World'
	hello.style.background = 'yellow'
	document.body.appendChild(hello);
});