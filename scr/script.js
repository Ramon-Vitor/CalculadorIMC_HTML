function calculo () {
    var alturat = document.getElementById("M")
    var pesot = document.getElementById("Kg")
    var idade = document.getElementById("idade")
    var resultado = document.getElementById('result')
    var fundo = document.getElementById('cor')

    var altura = parseFloat(alturat.value)
    var peso = parseFloat(pesot.value)

    imc = peso/(altura*altura)

    if(isNaN(imc)){
        alert("Valor Invalido")

    }else if (imc <= 18.5){
        resultado.innerHTML =`Seu IMC é de ${imc.toFixed(2)} voce está abaixo do peso`
        fundo.style.backgroundColor = 'crimson'

    }else if(imc >= 18.5 && imc <25 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está no peso ideal`
        fundo.style.backgroundColor = 'forestgreen'

    }else if (imc >= 25 && imc <29.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está levemente acima do peso`
        fundo.style.backgroundColor = ' rgb(233, 174, 25)'

    }else if(imc >= 30 && imc < 34.9){

        resultado.innerHTML =`Seu IMC é de ${imc.toFixed(2)} voce está obeso`
        fundo.style.backgroundColor = 'crimson'      
    }
} 