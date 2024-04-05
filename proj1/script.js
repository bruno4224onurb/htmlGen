let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txt = document.querySelector('#txtnome')
    if (nome.value.lenght < 1){
        txt.innerHTML('Nome Inválido')
    } else {
        txt.innerHTML('Nome Válido')
    }
}