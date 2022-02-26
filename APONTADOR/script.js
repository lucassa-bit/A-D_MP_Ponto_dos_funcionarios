const funcionariosBTN = document.querySelector(".funcionariosBTN");
const registroBTN = document.querySelector(".registroBTN");

if (localStorage.getItem("token") == null) {
  window.location.href = "../index.html";
}

funcionariosBTN.addEventListener("click", (e) => {
  funcionariosBTN.setAttribute(
    "href",
    "../telas-compartilhadas/funcionarios/index.html"
  );
});

registroBTN.addEventListener("click", (e) => {
  registroBTN.setAttribute(
    "href",
    "../telas-compartilhadas/calendario/index.html"
  );
});
