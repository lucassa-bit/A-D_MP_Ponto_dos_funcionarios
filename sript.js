const botao = document.querySelector('.botao')
const login = document.querySelector('.inputLogin')
const senha = document.querySelector('.inputSenha')

botao.addEventListener('click', e => {

    const login = document.querySelector('.inputLogin')
    const senha = document.querySelector('.inputSenha')
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

