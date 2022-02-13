const select = document.querySelector('.select')
const contaPagamento = document.querySelector('.contaPagamento')

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

