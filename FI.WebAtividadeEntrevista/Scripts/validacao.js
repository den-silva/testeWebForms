//alert ('Teste valida��o !!!!!!!!!!!!!!!!!!!!!!!!')
function TestaCPF() {
    var inputCPF = document.getElementById('CPF');
    var strCPF = inputCPF.value;

    if (strCPF.length != 14) {
        alert('CPF inv�lido! Digite todos os n�meros do CPF.');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    strCPF = strCPF.replace(/[^0-9]/g, ''); // Remove tudo que n�o � n�mero

    if (strCPF.length != 11) {
        alert('CPF inv�lido! Utilize APENAS n�meros neste campo.');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") {
        alert('CPF inv�lido!');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    for (var i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        alert('CPF inv�lido!');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) {
        alert('CPF inv�lido!');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    return true;
}