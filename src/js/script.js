var btn = document.getElementById('texto');
var nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    if (nav.style.visibility === 'hidden') {
        nav.style.visibility = 'visible';
    } else {
        nav.style.visibility = 'hidden';
    }
    api()
})

async function api() {
    const input = document.getElementById('data').value;
    const key = 'Xal2ri16laPoYH9tOv61Slq1ZtcWCERvZEyB6hZM'
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${input}`)
    const result = await data.json()
    const dados = result
    console.log(result)
    usandoApi(dados)
}

function usandoApi(dados) {
    document.querySelector('#container').innerHTML = dados.explanation;
    document.querySelector('#titulo').innerHTML = dados.titulo;
    if (dados.media_type === "image") {
        document.querySelector("#background").innerHTML =
            `<img src="${dados.url}" alt="">`
    }
}