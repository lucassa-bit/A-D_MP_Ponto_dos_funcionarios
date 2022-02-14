const select = document.querySelector('.select')
const contaPagamento = document.querySelector('.contaPagamento')

const nome = document.querySelector('.nome')
const cargo = document.querySelector('.cargo')
const vinculo = document.querySelector('.selectVinculo')
const valor = document.querySelector('.valor')
const RG = document.querySelector('.RG')
const CPF = document.querySelector('CPF')
const celular = document.querySelector('.celular')
const pis = document.querySelector('.pis')
/* const pagamento = document.querySelector('.pagamento') */
const pix = document.querySelector('.pix')
const banco = document.querySelector('.banco')
const agencia = document.querySelector('.agencia')
const conta = document.querySelector('.conta')
const operacao = document.querySelector('.operacao')

const cadastrarBTN = document.querySelector('.cadastrarBTN')



select.addEventListener('change', e => {
    if (e.target.value === 'conta'){
        const contaPagamento = document.querySelector('.contaPagamento')
        const pagamentoPix = document.querySelector('#pagamentoPix')
        contaPagamento.setAttribute('style', 'display: flex')
        pagamentoPix.setAttribute('style', 'display: none')
        return
    }
    if (e.target.value === 'pix'){
        const contaPagamento = document.querySelector('.contaPagamento')
        const pagamentoPix = document.querySelector('#pagamentoPix')
        contaPagamento.setAttribute('style', 'display:none') 
        pagamentoPix.setAttribute('style', 'display: flex')
        return
    }
}) 

cadastrarBTN.addEventListener('click', e => {
    fetch('https://flash-point-app.herokuapp.com/api/funcionario/findAll', {
        method: 'Get',
    }).then(response => response.json()).then(usuarios => {
        usuarios.map((val) => {
            if (val.rg === RG.value && val.cpf === CPF.value){
                if (vinculo.options[vinculo.selectedIndex].value === 'Líder'){
                    var resultado =  'Líder'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'CLT'){
                    var resultado =  'CLT'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'MEI'){
                    var resultado =  'MEI'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'Flutuante'){
                    var resultado =  'Flutuante'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'Diarista'){
                    var resultado =  'Diarista'
                }
                const pagamento2 = select.options[select.selectedIndex].value
                    fetch('https://flash-point-app.herokuapp.com/api/funcionario/edit', {
                        method: 'Put',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nome : nome.value,
                            cargo : cargo.value,
                            vinculo : resultado,
                            valor : valor.value,
                            rg : RG.value,
                            cpf : CPF.value,
                            celular : celular.value,
                            pis : pis.value,
                            pagamento : pagamento2,
                            pix : pix.value,
                            banco : banco.value,
                            agencia : agencia.value,
                            conta : conta.value,
                            operacao : operacao.value,
                        })
                    }).then(response => response.json())
            }else {
                if (vinculo.options[vinculo.selectedIndex].value === 'Líder'){
                    var resultado =  'Líder'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'CLT'){
                    var resultado =  'CLT'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'MEI'){
                    var resultado =  'MEI'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'Flutuante'){
                    var resultado =  'Flutuante'
                }else if (vinculo.options[vinculo.selectedIndex].value === 'Diarista'){
                    var resultado =  'Diarista'
                }
                const pagamento2 = select.options[select.selectedIndex].value
                fetch('https://flash-point-app.herokuapp.com/api/funcionario/create', {
                    method: 'Put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome : nome.value,
                        cargo : cargo.value,
                        vinculo : resultado,
                        valor : valor.value,
                        rg : RG.value,
                        cpf : CPF.value,
                        celular : celular.value,
                        pis : pis.value,
                        pagamento : pagamento2,
                        pix : pix.value,
                        banco : banco.value,
                        agencia : agencia.value,
                        conta : conta.value,
                        operacao : operacao.value,
                    })
                }).then(response => response.json())
                
            }

        })
    })

})

/* 
fetch('https://flash-point-app.herokuapp.com/api/funcionario/findAll', {
    method: 'Get',
}).then(response => response.json()).then(usuarios => {
    usuarios.map((val) => {
        if (val.rg === RG.value && val.cpf === CPF.value){
                fetch('https://flash-point-app.herokuapp.com/api/funcionario/edit', {
                    method: 'Put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome : nome.value,
                        cargo : cargo.value,
                        vinculo : vinculo.value,
                        valor : valor.value,
                        rg : RG.value,
                        cpf : CPF.value,
                        celular : celular.value,
                        pis : pis.value,
                        pagamento : pagamento.value,
                        pix : pix.value,
                        banco : banco.value,
                        agencia : agencia.value,
                        conta : conta.value,
                        operacao : operacao.value,
                    })
                }).then(response => response.json())
        }else {
            fetch('https://flash-point-app.herokuapp.com/api/funcionario/create')
        }

    })
})

 */