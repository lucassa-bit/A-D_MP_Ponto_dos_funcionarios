/* const novoLogin = document.querySelector('.novoLogin')
const novaSenha = document.querySelector('.novaSenha')
const novoNome = document.querySelector('.novoNome') */
/* const novoCargo = document.querySelector('.novoCargo') */

const select = document.querySelector('#select')
const cadastrar = document.querySelector('.botaoCadastrar')

cadastrar.addEventListener('click', e => {
    const novoLogin = document.querySelector('.novoLogin').value
    const novaSenha = document.querySelector('.novaSenha').value
    const novoNome = document.querySelector('.novoNome').value
    const novoCargo = select.options[select.selectedIndex].value

    fetch('https://flash-point-app.herokuapp.com:8040/api/usuario/create', {
        method: 'Post',
        body: JSON.stringify({
                login: novoLogin,
                senha: novaSenha,
                nome: novoNome,
                cargo: novoCargo
            })
    }).then(response => response.json())

}) 
