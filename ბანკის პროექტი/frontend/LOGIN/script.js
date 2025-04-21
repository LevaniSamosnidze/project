const form = document.getElementById('my_form');
const name1 = form.name;
const email = form.email;
const pas = form.pas;

const pas1 = 'levani123';
const email1 = 'levani@gmail.com';
const name2 = 'levani';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (name1.value === name2 && email.value === email1 && pas.value === pas1) {
        window.location.href = 'http://127.0.0.1:3000/frontend/MAIN/index.html'
        } else {
        alert('Incorrect login credentials.');
    }
});
