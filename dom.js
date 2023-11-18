//GETELEMENTBUID//
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText='Goodbye';
console.log(headerTitle.textContent);
headerTitle.innerHTML ='<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';


