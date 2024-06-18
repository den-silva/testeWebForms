//alert ('Teste validação !!!!!!!!!!!!!!!!!!!!!!!!')
function TestaCPF() {
    var inputCPF = document.getElementById('CPF');
    var strCPF = inputCPF.value;

    if (strCPF.length != 14) {
        alert('CPF inválido! Digite todos os números do CPF.');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    strCPF = strCPF.replace(/[^0-9]/g, ''); // Remove tudo que não é número

    if (strCPF.length != 11) {
        alert('CPF inválido! Utilize APENAS números neste campo.');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") {
        alert('CPF inválido!');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    for (var i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        alert('CPF inválido!');
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
        alert('CPF inválido!');
        inputCPF.value = ''; // Limpa o campo de texto
        return false;
    }

    return true;
}