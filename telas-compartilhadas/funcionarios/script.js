const cadastrarBTN = document.querySelector(".cadastrarBTN");

cadastrarBTN.addEventListener("click", (e) => {
  cadastrarBTN.setAttribute("href", "./cadastrar/index.html");
});

function deleteFuncionarioById(id) {
  fetch(
    "https://flash-point-app.herokuapp.com/api/funcionario/delete?id=" + id,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  ).then((e) => loadFuncionarios());
}

function loadFuncionarios() {
  document.querySelector(".listaFuncionarios").innerHTML = "";
  fetch("https://flash-point-app.herokuapp.com/api/funcionario", {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((usuarios) => {
      usuarios.map((val) => {
        document.querySelector(".listaFuncionarios").innerHTML +=
          `
        <div class="containerFuncionarios">
            <ul class="lista_funcionarios">
              <li class="funcionario" > Nome: ` +
          val.nome +
          ` - Cargo: ` +
          val.cargo +
          `</li> 
              <input class="deletarInput" type="submit" value="Deletar" onclick="deleteFuncionarioById(` +
          val.id +
          `)"/> 
            </ul> 
        </div>    

        `;
      });
    });
}

loadFuncionarios();
