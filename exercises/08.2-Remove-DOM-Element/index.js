let list = document.querySelector("#parentLi");
let childs = list.childNodes; 
console.log(childs)

list.removeChild(childs[3])