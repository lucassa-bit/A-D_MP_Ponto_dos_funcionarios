const botao = document.querySelector('.botao')
const login = document.querySelector('.inputLogin')
const senha = document.querySelector('.inputSenha')

botao.addEventListener('click', e => {
    const login = document.querySelector('.inputLogin')
    const senha = document.querySelector('.inputSenha')
    const botao = document.querySelector('.botao')
    if (login.value.toLowerCase() === 'lider' && senha.value === '123') {
        botao.setAttribute('href', './lider/index.html')
        login = ''
        senha = ''
    } else if (login.value.toLowerCase() === 'administrador' && senha.value === '123') {
        botao.setAttribute('href', './administrador/index.html')
        login = ''
        senha = ''
    } else if (login.value.toLowerCase() === 'apontador' && senha.value === '123') {
        botao.setAttribute('href', './apontador-fiscal/index.html')
        login = ''
        senha = ''

    }

})