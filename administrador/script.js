const funcionariosBTN = document.querySelector('.funcionariosBTN')
const registroBTN = document.querySelector('.registroBTN')
const folhaBTN = document.querySelector('.folhaBTN')
const gestaoBTN = document.querySelector('.gestaoBTN')


funcionariosBTN.addEventListener('click', e => {
    funcionariosBTN.setAttribute('href', '../lider/funcionarios/index.html')
})

registroBTN.addEventListener('click', e => {
    registroBTN.setAttribute('href', '../lider/registro de atividade/index.html')
})

folhaBTN.addEventListener('click', e => {
    folhaBTN.setAttribute('href', '../lider/folha de pagamento/index.html')
})

gestaoBTN.addEventListener('click', e => {
    gestaoBTN.setAttribute('href', './gestao fiscal/index.html')
})
