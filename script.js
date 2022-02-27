const botao = document.querySelector('.botao')
const login = document.querySelector('.inputLogin')
const senha = document.querySelector('.inputSenha')
senha.setAttribute("type", "password");

botao.addEventListener('click', e => {

    const login = document.querySelector('.inputLogin')
    const senha = document.querySelector('.inputSenha')
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
        .then(async resp => {
            if (!resp.ok) {
                throw new Error("Usuario ou senha incorretos!");
            }
            return resp.text();
        })
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
                    window.location.href = './ADMIN/index.html';
                } else if (test.cargo === 'LIDER') {
                    window.location.href = './LIDER/index.html';
                } else if (test.cargo === 'APONTADOR') {
                    window.location.href = './APONTADOR/index.html';
                }
            })
        )
        .catch((e) => alert(e))
});