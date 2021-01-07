const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body) //pega os estilos do body
const backgroundBody = estiloBody.backgroundColor //pega a cor do background

for (let p of ps) {
    p.style.color = 'white'
    p.style.backgroundColor = backgroundBody
}