const queryString = window.location.search;
const dataTitulo = document.querySelector(".titulo");
const salvarBTN = document.querySelector(".salvarBTN");
var data = "";
var funcionariosPontos = [];
var selecionados = [];
carregamentoInicial();

fetch("https://flash-point-app.herokuapp.com/api/usuario/me", {
  method: "Get",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
})
  .then((response) => response.json())
  .then((usuario) => {
    if (usuario.cargo === "ADMIN") {
    } else if (usuario.cargo === "LIDER") {
      window.location.href = "./LIDER/index.html";
    } else if (usuario.cargo === "APONTADOR") {
      window.location.href = "./APONTADOR/index.html";
    }

    if (usuario.cargo === "ADMIN") {
    } else if (usuario.cargo === "LIDER") {
      // lider n pode aprovar nem revisar
    } else if (usuario.cargo === "APONTADOR") {
      //so pode clicar em aprovar ou revisar
    }
  });

function carregamentoInicial() {
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has("data")) {
    data = urlParams.get("data");
    dataTitulo.innerHTML = ` <h2>A data selecionada foi: ` + data + `</h2>`;
    tabelaPontos();
  } else {
    window.location.href = "../index.html";
  }
}

function tabelaPontos() {
  fetch("https://flash-point-app.herokuapp.com/api/ponto?data=" + data, {
    method: "Get",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((response) => response.json())
    .then((funcionarios) => {
      document.querySelector(".innerHTML").innerHTML = "";
      funcionarios.map((val) => {
        const main2 = document.createElement("div");
        main2.setAttribute("class", "main2");
        main2.innerHTML += `

        <div class="titulos">
            <h3 class="h3_1">Hora extra<span>50%</span></h3>
            <h3 class="h3_2">Hora extra<span>100%</span></h3>
        </div>`;

        const listaFuncionarios = document.createElement("ul");
        listaFuncionarios.setAttribute("class", "lista_funcionarios");

        const input50 = document.createElement("input");
        input50.setAttribute("class", "horaExtra50");
        input50.setAttribute("type", "text");
        input50.setAttribute("placeholder", "Hora extra 50%");
        input50.setAttribute("value", val.hora_extra_50);

        const input100 = document.createElement("input");
        input100.setAttribute("class", "horaExtra100");
        input100.setAttribute("type", "text");
        input100.setAttribute("placeholder", "Hora extra 100%");
        input100.setAttribute("value", val.hora_extra_100);

        main2.setAttribute("class", "main2");

        main2.appendChild(listaFuncionarios);

        const nomeFuncionario = document.createElement("div");
        nomeFuncionario.setAttribute("class", "nome_funcionario");
        nomeFuncionario.setAttribute("style", "cursor:pointer;");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute(
          "onclick",
          `onClickFuncionarioCheckbox(${val.empregado.id}, this)`
        );
        if (val.presente == true) {
          selecionados.push(val.empregado.id);
          checkbox.setAttribute("checked", "true");
        }

        nomeFuncionario.appendChild(checkbox);
        listaFuncionarios.appendChild(nomeFuncionario);

        listaFuncionarios.appendChild(input50);
        listaFuncionarios.appendChild(input100);
        nomeFuncionario.innerHTML +=
          val.empregado.nome +
          `
                    <div class="informacoesExtras" style="display: none;">
                        <h4>Cargo: ` +
          val.empregado.cargo +
          `</h4>
                    </div>
    `;
        document.querySelector(".innerHTML").appendChild(main2);
        funcionariosPontos.push({
          idFuncionario: val.empregado.id,
          horaExtra50Element: input50,
          horaExtra100Element: input100,
          checkboxElement: checkbox,
        });
      });

      var nomesFuncionarios = document.querySelectorAll(".nome_funcionario");
      for (var i = 0; i < nomesFuncionarios.length; i++) {
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
}

salvarBTN.addEventListener("click", (e) => {
  var body = [];
  funcionariosPontos.forEach((element) => {
    body.push({
      idFuncionario: element.idFuncionario,
      hora_extra_50: element.horaExtra50Element.value,
      hora_extra_100: element.horaExtra100Element.value,
      presente: selecionados.some((id) => id == element.idFuncionario),
    });
  });

  console.log(body);
  fetch("https://flash-point-app.herokuapp.com/api/ponto?data=" + data, {
    method: "Post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((response) => response);
});

function onClickFuncionarioCheckbox(id, element) {
  console.log(element.checked);
  if (element.checked) {
    selecionados.push(id);
  } else {
    selecionados = selecionados.filter((e) => e !== id);
  }
}
