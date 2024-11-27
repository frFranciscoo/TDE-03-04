let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta") //querySelector usado para selecionar os elementos html
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)

    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    if(evento.target.value =="0"){
        alert('A quantidade de pessoas não pode ser igual a Zero.')
    }else{
        pessoas = Number(evento.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']") // [] foram usados para especificar os botões
botoesGorjeta.forEach(botao =>{   //forEach foi usado para percorrer todos os botoes
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao(evento) {
    porcentagem = parseFloat(evento.target.value) / 100  // os valores dos botões eram em String graças ao % o PerseFloat fou usado para transformar em PFlutuante

    calcular()
}

function calcular(){    
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")     // > foi usado para expecificar o strong
        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}` //calculo da gorjeta por pessoa

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}` // Calculo do total por pessoa
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar() {  //Função para o botão Limpar
    contaInput.value = ""
    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

    conta = 0
    pessoas = 0 
    porcentagem = 0
}