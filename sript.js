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
<<<<<<< HEAD
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
=======
    const botao = document.querySelector('.botao') 

    fetch('https://flash-point-app.herokuapp.com/api/usuario/all', {
        method: 'Get',
    }).then(response => response.json()).then(usuarios => {
        usuarios.map((val) => {
            if (login.value === 'Admin' && senha.value === 'admin123') {
                botao.setAttribute('href', './administrador/index.html')
                login = ''
                senha = ''
                
            }else if (login.value === val.login && senha.value === val.password){
                if (val.cargo === 'ADMIN'){
                    login = ''
                    senha = ''
                    botao.setAttribute('href', './administrador/index.html')
                }
                else if(val.cargo === 'LIDER'){
                    login = ''
                    senha = ''
                    botao.setAttribute('href', './lider/index.html')
                    
                }
                else if(val.cargo === 'APONTADOR'){
                    login = ''
                    senha = ''
                    botao.setAttribute('href', './apontador-fiscal/index.html')
                }
            }else{
                alert("Erro! Veja se a senha e o login estão certos")
                login = ''
                senha = ''
            }
             /*
            if(login === val.login && senha === val.password){
                if (val.cargo === 'ADMIN'){
                    botao.setAttribute('href', './administrador/index.html')
                }
                else if(val.cargo === 'LIDER'){
                    botao.setAttribute('href', './lider/index.html')
                }
                else if(val.cargo === 'APONTADOR'){
                    botao.setAttribute('href', './apontador-fiscal/index.html')
                }
                login = ''
                senha = ''
            }   else {
                alert("Erro! Veja se a senha e o login estão certos")
                login = ''
                senha = ''

            } */

        })
    })
    
    
/*     if (login.value === 'admin' && senha.value === 'admin123') {
        botao.setAttribute('href', './lider/index.html')
        login = ''
        senha = ''
        return
  
  
} */

})

 /*    } else if (login.value.toLowerCase() === 'admin' && senha.value === '123') {
        botao.setAttribute('href', './administrador/index.html')
        login = ''
        senha = ''
    } else if (login.value.toLowerCase() === 'apontador' && senha.value === '123') {
        botao.setAttribute('href', './apontador-fiscal/index.html')
        login = ''
        senha = ''

    } */

>>>>>>> 537819397fc5039e90b23a37c91aef9c3d0c2aaa
