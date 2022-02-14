const botao = document.querySelector('.botao')
const login = document.querySelector('.inputLogin')
const senha = document.querySelector('.inputSenha')
senha.setAttribute("type", "password");

if (localStorage.getItem("token") != null) {
    localStorage.removeItem("token");
}

botao.addEventListener('click', e => {
    const login = document.querySelector('.inputLogin')
    const senha = document.querySelector('.inputSenha')
    const botao = document.querySelector('.botao')
    senha.setAttribute("type", "password");

    const data = {
        login: login.value,
        password: senha.value
    };

    var fetchData = {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data)
    }

    fetch('https://flash-point-app.herokuapp.com/login', fetchData)
        .then(resp => resp.text())
        .then(token => localStorage.setItem("token", token))
        .then(async() => fetch('https://flash-point-app.herokuapp.com/api/usuario/me', {
                method: 'Get',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }).then((text) => text.json())
            .then((test) => {
                document.querySelector('.inputLogin').value = '';
                document.querySelector('.inputSenha').value = '';

                if (test.cargo === 'ADMIN') {
                    window.location.href = './administrador/index.html';
                } else if (test.cargo === 'LIDER') {
                    window.location.href = './lider/index.html';
                } else if (test.cargo === 'APONTADOR') {
                    window.location.href = './apontador-fiscal/index.html';
                }
            })
            .catch(function(error) {
                console.log(error);
            }))
        .catch(function(error) {
            console.log(error);
        })
});