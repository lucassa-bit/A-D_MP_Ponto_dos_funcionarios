const mes = document.querySelector(".month");

function getMesTamanho() {
  const splitDate = mes.value.split("-");
  const novaData = new Date(splitDate[0], splitDate[1], 0);
  return novaData;
}

async function criaDias() {
  const final = getMesTamanho().getDate();
  console.log(final);

  const calendario = document.querySelector(".calendario");

  calendario.innerHTML = "";
  const splitDate = mes.value.split("-");
  const status = await pegaStatus(
    "01",
    String(final).padStart(2, "0"),
    String(splitDate[1]).padStart(2, "0"),
    splitDate[0]
  );
  console.log(status);
  for (let index = 0; index < status.length; index++) {
    var statusIndex = status[index];
    console.log(statusIndex);
    var mudaCor = "naoCadastrado";
    if (statusIndex.status == "APROVADO") {
      mudaCor = "aprovado";
    } else if (statusIndex.status == "REVISAO") {
      mudaCor = "revisao";
    } else if (statusIndex.status == "NAO_VALIDADO") {
      mudaCor = "reprovado";
    }
    console.log(statusIndex.data);
    calendario.innerHTML += `
    <div class="divDatas">
        <a class = ${mudaCor} style="cursor: pointer;" onclick="novoHref(${
      index + 1
    })">${index + 1}</a>
    </div>
`;
  }
}

function novoHref(novaData) {
  const data = mes.value.split("-");
  window.location.href =
    "./registro de atividade/index.html?data=" +
    novaData +
    "/" +
    data[1] +
    "/" +
    data[0];
  console.log(novaData);
}

async function pegaStatus(diaInicial, diaFinal, mes, ano) {
  return fetch(
    "https://flash-point-app.herokuapp.com/api/revisao_ponto/range?dataInicial=" +
      diaInicial +
      "/" +
      mes +
      "/" +
      ano +
      "&dataFinal=" +
      diaFinal +
      "/" +
      mes +
      "/" +
      ano,
    {
      method: "Get",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }
  )
    .then((response) => response.json())
    .then((status) => status);
}

mes.addEventListener("change", (e) => {
  criaDias();
});
