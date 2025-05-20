function calcular() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    const sexoSelect = document.getElementById(`sexo`);
    let mensagem = "";
    const sexo = sexoSelect.value;
    //Isso veio do gpt
    if (isNaN(peso) || isNaN(altura) || sexo === "") {
        resultado.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    const imc = peso / (altura * altura);
    
    if (sexo === 'Homem') {
        if (imc < 20.7) {
            mensagem  = `${nome}, você está abaixo do peso.`;

        } else if (imc <= 26.4) {
            mensagem  = `${nome}, você está no peso normal.`;

        }

        else if (imc <= 27.8) {
            mensagem  = `${nome}, você está um pouco acima do peso.`;


        } else if (imc <= 31.1) {
            mensagem  = `${nome}, você está acima do peso ideal .`;


        }

        else {
            mensagem = `${nome}, você está obeso.`;
        }

    } else if (sexo === 'Mulher') {
        if (imc < 19.1) {
            mensagem  = `${nome}, você está abaixo do peso.`;

        } else if (imc <= 25.8) {
            mensagem  = `${nome}, você está no peso normal.`;

        } else if (imc <= 27.3) {
            mensagem  = `${nome}, você está um pouco acima do peso.`;


        } else if (imc <= 32.3) {
            mensagem  = `${nome}, você está acima do peso ideal .`;


        } else {
            mensagem  = `${nome}, você está obesa.`;
        }
    }

    resultado.textContent = `${mensagem}`;
}