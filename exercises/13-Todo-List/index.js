// Your code here
let list = document.querySelector('ul');
let input = document.getElementById('addToDo');
let child = list.children;

for (let i =0; i<child.length; i ++) {
    child[i].addEventListener('click', function() {
        let child = list.children;
        list.removeChild(this);
    })
}



input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        let aux = document.createElement('li');
        aux.innerHTML = '<span><i class="fa fa-trash"></i></span> '+input.value;
        aux.addEventListener('click', function() {
            list.removeChild(this);
        })
        list.appendChild(aux);
        input.value = '';
}});




