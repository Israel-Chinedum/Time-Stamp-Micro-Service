const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

form.addEventListener('submit', e => {
    e.preventDefault();
    const date = input.value;
    fetch(`/api/${date}`)
    .then(res => res.json())
    .then(data => console.log(data));

})