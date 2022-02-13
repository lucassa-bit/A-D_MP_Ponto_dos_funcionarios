const funcionariosBTN = document.querySelector('.funcionariosBTN')
const registroBTN = document.querySelector('.registroBTN')



funcionariosBTN.addEventListener('click', e => {
    funcionariosBTN.setAttribute('href', '../lider/funcionarios/index.html')
})

registroBTN.addEventListener('click', e => {
    registroBTN.setAttribute('href', '../lider/registro de atividade/index.html')
})