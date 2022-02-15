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
              <li class="funcionario" > Nome: ` + val.nome + ` - Cargo: ` + val.cargo +  `</li> 
              <input class="deletarInput" type="submit" value="Deletar" /> 
            </ul> 
        </div>    
        `
    })
    const deletar = document.querySelectorAll('.deletarInput')
    const funcionario = document.querySelectorAll('.funcionario')
    console.log(funcionario[1])
})

const deletar = document.querySelectorAll('.deletarInput')
const funcionario = document.querySelectorAll('.funcionario')


for (var i = 0; i < funcionario.length; i++) {
    
   /*  deletar[i].addEventListener('click', e =>{
        fetch('https://flash-point-app.herokuapp.com/edit/delete/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        }).then(response => response.json())
    })    */
  } 
