const funcionariosBTN = document.querySelector('.funcionariosBTN')
const registroBTN = document.querySelector('.registroBTN')
const folhaBTN = document.querySelector('.folhaBTN')


funcionariosBTN.addEventListener('click', e => {
    funcionariosBTN.setAttribute('href', './funcionarios/index.html')
})

registroBTN.addEventListener('click', e => {
    registroBTN.setAttribute('href', './registro de atividade/index.html')
})

folhaBTN.addEventListener('click', e => {
    folhaBTN.setAttribute('href', './folha de pagamento/index.html')
})
