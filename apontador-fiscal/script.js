const funcionariosBTN = document.querySelector('.funcionariosBTN')
const registroBTN = document.querySelector('.registroBTN')



funcionariosBTN.addEventListener('click', e => {
    funcionariosBTN.setAttribute('href', '../telas-compartilhadas/funcionarios/index.html')
})

registroBTN.addEventListener('click', e => {
    registroBTN.setAttribute('href', '../telas-compartilhadas/registro de atividade/index.html')
})