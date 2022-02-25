const data = document.querySelector(".data");

data.addEventListener("change", (e) => {
  var teste = e.target.value;
  teste = teste.split("-").reverse().join("/");
  fetch("https://flash-point-app.herokuapp.com/api/ponto?data=" + teste, {
    method: "Get",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((response) => response.json())
    .then((funcionarios) => {
      document.querySelector(".innerHTML").innerHTML = "";
      funcionarios.map((val) => {
        document.querySelector(".innerHTML").innerHTML +=
          `
            <div class="main2">
                <div class="titulos">
                    <h3 class="h3_1">Hora extra<span>50%</span></h3>
                    <h3 class="h3_2">Hora extra<span>100%</span></h3>
                </div>
                <ul class="lista_funcionarios">
                    <input class="horaExtra50" type="number" placeholder="Hora extra 50%">
                    <input class="horaExtra100" type="number" placeholder="Hora extra 100%">
                </ul> 
                <div style="cursor:pointer;" class="nome_funcionario">  <input class="checkbox"type="checkbox">` +
          val.empregado.nome +
          `
                        <div class="informacoesExtras" style="display: none;">
                            <h4>Cargo: ` +
          val.empregado.cargo +
          `</h4>
                        </div>
                    
                    </div>
            </div>  `;
      });

      var nomesFuncionarios = document.querySelectorAll(".nome_funcionario");
      for (var i = 0; i < nomesFuncionarios.length; i++) {
        console.log(nomesFuncionarios.length);
        nomesFuncionarios[i].addEventListener("click", (e) => {
          if (
            e.target.querySelector(".informacoesExtras").style.display == "none"
          ) {
            e.target.querySelector(".informacoesExtras").style.display =
              "block";
          } else {
            e.target.querySelector(".informacoesExtras").style.display = "none";
          }
        });
      } // for
    });
});
