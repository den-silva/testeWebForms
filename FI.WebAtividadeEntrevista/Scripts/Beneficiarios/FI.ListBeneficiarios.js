const urlBeneficiarioList = '/Beneficiario/BeneficiarioList'
const urlAlteracaoBeneficiario = '/Beneficiario/Alterar'

$(document).ready(function () {

    if (document.getElementById("gridBeneficiarios"))
        $('#gridBeneficiarios').jtable({
            title: 'Beneficiarios',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlBeneficiarioList,
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                CPF: {
                    title: 'CPF',
                    width: '35%'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        //return '<button onclick="window.location.href=\'' + urlAlteracaoBeneficiario + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                        return '<button class="btn btn-primary btn-sm data-target="#exampleModal2 ">Alterar</button>';

                    }
                },

                 Deletar: {
                    title: '',
                    display: function (data) {
                        //return '<button onclick="window.location.href=\'' + urlAlteracaoBeneficiario + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                        return '<button class="btn btn-danger btn-sm data-target="#exampleModal2 ">Deletar</button>';

                    }
                }
            }
        });

    //Load student list from server
    if (document.getElementById("gridBeneficiarios"))
        $('#gridBeneficiarios').jtable('load');
})