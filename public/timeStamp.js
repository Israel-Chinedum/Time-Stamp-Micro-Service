const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/api/:date?', {
        headers: {'Content-Type': 'text/plain'},
        method: 'post',
        body: `${input.value}`
    })
    .then(res => {
        return res.json().then(data => ({res, data}));
    }).then(({res, data}) => {

        if(!res.ok){
            output.innerHTML = `<p style="color: red">error : ${data.error}</p>`
            throw new Error(data.error);
        } 

        output.innerHTML = `[unix: ${data.unix}, utc: ${data.utc}]`;
        
    }).catch(err => console.log(err));
})