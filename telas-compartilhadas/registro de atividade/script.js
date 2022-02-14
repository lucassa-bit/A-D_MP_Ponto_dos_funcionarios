const botao = document.querySelector('.botao')

fetch('https://flash-point-app.herokuapp.com/api/ponto/findByDate?data=13/02/2022', {
    method: 'Get',
    headers: {'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTY0NDkzMTg5Mn0.X0-goPFj-5_siI3hyQVak4-rMiUmojBxtAaXV2cefRHajXCY6CFXic4x0EfnNjFx9buv5bRuh2wT6GdpvOixlA'}
}).then(response => response.json()).then(funcionarios => {
    funcionarios.map((val) => {
        document.querySelector('.innerHTML').innerHTML += `
        <div class="main2">
            <div class="titulos">
                <h3 class="h3_1">Hora extra <span>50%</span> </h3>
                <h3 class="h3_2">Hora extra<span>100%</span></h3>
            </div>
            <ul class="lista_funcionarios">
                <input class="checkbox"type="checkbox">
                <h2 class="nome_funcionario">` + val.empregado.nome + `</h2>
                <input type="text" placeholder="Hora extra 50%">
                <input type="text" placeholder="Hora extra 100%">
            </ul> 
        </div>
        `
        console.log(funcionarios.length)
    })
})


/* 
document.querySelector('.innerHTML').innerHTML += `
<div class="main2">
    <div class="titulos">
        <h3 class="h3_1">Hora extra <span>50%</span> </h3>
        <h3 class="h3_2">Hora extra<span>100%</span></h3>
    </div>
    <ul class="lista_funcionarios">
        <input class="checkbox"type="checkbox">
        <h2 class="nome_funcionario">Funcionário</h2>
        <input type="text" placeholder="Hora extra 50%">
        <input type="text" placeholder="Hora extra 100%">
    </ul> 
</div>


`
 */