const cadastrarBTN = document.querySelector('.cadastrarBTN')

cadastrarBTN.addEventListener('click', e => {
    cadastrarBTN.setAttribute('href', './cadastrar/index.html')
})

fetch('https://flash-point-app.herokuapp.com/api/funcionario/findAll', {
    method: 'Get',
}).then(response => response.json()).then(usuarios => {
    usuarios.map((val) => {
        document.querySelector('.listaFuncionarios').innerHTML += `
        <div class="containerFuncionarios">
            <ul class="lista_funcionarios">
              <li> Nome: ` + val.nome + ` - Cargo: ` + val.cargo +  `</li> 
            </ul> 
        </div>
        `

    })
})