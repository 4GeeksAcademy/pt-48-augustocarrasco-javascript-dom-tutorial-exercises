// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector

let aux =  document.querySelector("#secondElement");
let li = document.getElementsByTagName('li');
aux.parentNode.removeChild(aux)