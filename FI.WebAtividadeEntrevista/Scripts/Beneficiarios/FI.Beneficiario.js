$(document).ready(function () {
    $('#botaoIncluir').click(function (e) {
        e.preventDefault();
        var dadosModal = {
            //CPFBeneficiario: $('#CPFBeneficiario').val(),
            //NomeBeneficiario: $('#NomeBeneficiario').val(),
            //CPF: $('#CPF').val()

            "CPFBeneficiario": $(this).find("#CPFBeneficiario").val(),
            "NomeBeneficiario": $(this).find("#NomeBeneficiario").val(),
            "CPF": $(this).find("#CPF").val()

            // Adicione todos os campos que você precisa enviar
        };
        $.ajax({
            type: 'POST',
            url: '@Url.Action("AcaoNoController")', // Substitua com a URL da sua ação no controller
            data: dadosModal,
            success: function (response) {
                // Trate a resposta do servidor aqui
            },
            error: function (error) {
                // Trate erros de comunicação aqui
            }
        });
    });
});
