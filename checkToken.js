fetch('https://flash-point-app.herokuapp.com/api/usuario/me', {
        method: 'Get',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Cache-control' : 'max-age=300'
        }
    })
    .then((text) => text.json())
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
    .catch(function(error) {
        console.log(error);
    })