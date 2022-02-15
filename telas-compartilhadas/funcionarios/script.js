const cadastrarBTN = document.querySelector('.cadastrarBTN')

cadastrarBTN.addEventListener('click', e => {
    cadastrarBTN.setAttribute('href', './cadastrar/index.html')
})

function deleteById (id){
    fetch('https://flash-point-app.herokuapp.com/api/funcionario/edit/delete?id=' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
    }).then(response => response.json())
    
}

fetch('https://flash-point-app.herokuapp.com/api/funcionario/findAll', {
    method: 'Get',
}).then(response => response.json()).then(usuarios => {
    usuarios.map((val) => {
        document.querySelector('.listaFuncionarios').innerHTML += `
        <div class="containerFuncionarios">
            <ul class="lista_funcionarios">
              <li class="funcionario" > Nome: ` + val.nome + ` - Cargo: ` + val.cargo +  `</li> 
              <input class="deletarInput" type="submit" value="Deletar" onclick="deleteById(` +val.id+ `)"/> 
            </ul> 
        </div>    

        `      

    })
  
})




