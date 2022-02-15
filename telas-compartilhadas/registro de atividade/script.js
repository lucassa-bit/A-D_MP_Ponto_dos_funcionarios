const data = document.querySelector('.data')

data.addEventListener('change', e =>{
    var teste = e.target.value
    teste =  teste.split('-').reverse().join('/')
    fetch('https://flash-point-app.herokuapp.com/api/ponto/findByDate?data=' + teste ,{
    method: 'Get',
    headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
    }).then(response => response.json()).then(funcionarios => {  
        document.querySelector('.innerHTML').innerHTML = ''    
        funcionarios.map((val) => {
            document.querySelector('.innerHTML').innerHTML += `
            <div class="main2">
                <div class="titulos">
                    <h3 class="h3_1">Hora extra<span>50%</span></h3>
                    <h3 class="h3_2">Hora extra<span>100%</span></h3>
                </div>
                <ul class="lista_funcionarios">
                    <input class="checkbox"type="checkbox">
                    <div style="cursor:pointer;" class="nome_funcionario">` + val.empregado.nome + `</div>
                    <input class="horaExtra50" type="number" placeholder="Hora extra 50%">
                    <input class="horaExtra100" type="number" placeholder="Hora extra 100%">
                </ul> 
                <div class="informacoesExtras" style="display: block;">
                    <h3>Nome: ` + val.empregado.nome +`</h3>
                    <h3>Cargo: ` + val.empregado.cargo +`</h3>
                    <h3>Vínculo: ` + val.empregado.vinculo +`</h3>
                    <h3>Valor: ` + val.empregado.valor +`</h3>
                    <h3>RG: ` + val.empregado.rg +`</h3>
                    <h3>CPF: ` + val.empregado.cpf +`</h3>
                    <h3>Celular: ` + val.empregado.celular +`</h3>
                    <h3>Pis: ` + val.empregado.pis +`</h3>
                    <h3>Pagamento: ` + val.empregado.pagamento +`</h3>
                </div>
            </div>  `   
        }) 

        const nomesFuncionarios = document.querySelectorAll('.nome_funcionario')
        for (var i = 0; i < nomesFuncionarios.length; i++) {
          console.log(nomesFuncionarios.length)
          nomesFuncionarios[i].addEventListener('click', e =>{
              if (e.target.querySelector('.informacoesExtras').style.display == 'block'){
                  e.target.querySelector('.informacoesExtras').style.display == 'none'
              }else {
                  e.target.querySelector('.informacoesExtras').style.display == 'block'
              }
          })   
        } 
    }) 
 
})