const selecionarBTN = document.querySelector(".selecionarBTN");
const exportarBTN = document.querySelector(".exportarBTN");

const dataInicialInput = document.querySelector(".dataInicialInput");
const dataFinalInput = document.querySelector(".dataFinalInput");

selecionarBTN.addEventListener("click", (e) => onSelectAll());
exportarBTN.addEventListener("click", (e) => exportar());

function exportar() {
  var dataInicialValue = dataInicialInput.value;
  var dataFinalValue = dataFinalInput.value;
  if (selectedIds.length == 0) {
    alert("Selecione ao menos um funcionário!");
    return;
  }
  if (dataInicialValue == "" || dataFinalValue == "") {
    alert("Selecione o intervalo de datas!");
    return;
  }
  if (dataInicialValue > dataFinalValue) {
    alert("Intervalo não aceito! A data inicial deve ser menor que a final.");
    return;
  }
  var dataInicialConverted = dataInicialValue.split("-").reverse().join("/");
  var dataFinalConverted = dataFinalValue.split("-").reverse().join("/");

  var token = "Bearer " + localStorage.getItem("token");

  console.log(dataInicialConverted);
  console.log(dataFinalConverted);
  console.log(selectedIds);

  var url = `https://flash-point-app.herokuapp.com/api/relatorio`;
  url += `?data_inicial=${dataInicialConverted}`;
  url += `&data_final=${dataInicialConverted}`;
  // primeira - segunda
  url += `&authentication=${token}`;
  selectedIds.forEach((id) => {
    url += `&ids=${id}`;
  });
  window.open(url, "_blank");
}

var allFuncionarios = [];
var selectedIds = [];

function onSelectAll() {
  selectedIds = [];
  allFuncionarios.forEach((f) => selectedIds.push(f.id));
  buildFuncionarios(true);
}

function onClickFuncionarioCheckbox(id, element) {
  if (element.checked) {
    selectedIds.push(id);
  } else {
    selectedIds = selectedIds.filter((e) => e !== id);
  }
}

function buildFuncionarios(selectAll) {
  document.querySelector(".funcionarios").innerHTML = "";
  var selectAtt = "";
  if (selectAll) {
    selectAtt = "checked = true";
  }
  allFuncionarios.map((f) => {
    document.querySelector(".funcionarios").innerHTML +=
      `
        <div class="containerFuncionarios">
            <ul class="lista_funcionarios">
                <input class="checkbox" type="checkbox" ` +
      selectAtt +
      ` onclick="onClickFuncionarioCheckbox(${f.id}, this);">
                <h2 class="nome_funcionario">${f.nome}</h2>
            </ul> 
        </div>
        `;
  });
}

function loadFuncionarios() {
  fetch("https://flash-point-app.herokuapp.com/api/funcionario", {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((funcionarios) => {
      allFuncionarios = funcionarios;
      buildFuncionarios(false);
    });
}

loadFuncionarios();
