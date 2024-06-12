$(document).ready(function () {
    $('#botaoIncluir').click(function (e) {
        e.preventDefault();
        var dadosModal = {
            CPFBeneficiario: $('#campo1').val(),
            campo2: $('#campo2').val()
            campo2: $('#campo2').val()
            campo2: $('#campo2').val()

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
