const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

form.addEventListener('submit', e => {
    let problem;
    e.preventDefault();
    fetch('/api-unix-utc', {
        headers: {'Content-Type': 'text/plain'},
        method: 'post',
        body: `${input.value}`
    })
    .then(res => {
        return res.json().then(data => ({res, data}));
    }).then(({res, data}) => {

        if(!res.ok){
            throw new Error(data.error);
        } 

        output.innerHTML = `[unix: ${data.unix}, utc: ${data.utc}]`;
        console.log(data);
        
    }).catch(err => console.log(err));
})