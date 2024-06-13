using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using FI.AtividadeEntrevista.DML;

namespace FI.AtividadeEntrevista.DAL
{
    /// <summary>
    /// Classe de acesso a dados de Beneficiário
    /// </summary>
    internal class DaoBeneficiario : AcessoDados
    {

        internal long Incluir(DML.Beneficiario beneficiario)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Nome", beneficiario.Nome));
            parametros.Add(new System.Data.SqlClient.SqlParameter("CPF", beneficiario.CPF));
            parametros.Add(new System.Data.SqlClient.SqlParameter("IDcliente", beneficiario.IdCliente));

            long ret = 0;
            DataSet ds = base.Consultar("FI_SP_IncBeneficiario", parametros);
            

            return ret;
        }

        internal bool VerificarExistencia(string CPF)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("CPF", CPF));

            DataSet ds = base.Consultar("FI_SP_VerificaCliente", parametros);

            return ds.Tables[0].Rows.Count > 0;
        }

        public bool VerificarCpfClienteBenef(int id)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("ID", id));

            DataSet ds = base.Consultar("FI_SP_PesquisaCpfClienteBenef", parametros);

            if (ds.Tables[0].Rows.Count > 0)
            {
                return true;
            }

            return false;
        }

        internal DML.Beneficiario Consultar(long Id)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Id", Id));

            DataSet ds = base.Consultar("FI_SP_ConsCliente", parametros);
            List<DML.Beneficiario> ben = Converter(ds);

            return ben.FirstOrDefault();
        }

        internal List<Beneficiario> Pesquisa(int iniciarEm, int quantidade, string campoOrdenacao, bool crescente, out int qtd)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();
            DataSet ds = base.Consultar("FI_SP_PesquisaBenef", parametros);
            List<DML.Beneficiario> ben = Converter(ds);

            int iQtd = 0;

            if (ds.Tables.Count > 1 && ds.Tables[1].Rows.Count > 0)
                int.TryParse(ds.Tables[1].Rows[0][0].ToString(), out iQtd);

            qtd = iQtd;

            return ben;
        }


        internal void Alterar(DML.Beneficiario beneficiario)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Nome", beneficiario.Nome));
            parametros.Add(new System.Data.SqlClient.SqlParameter("CPFCliente", beneficiario.CPFCliente));
            parametros.Add(new System.Data.SqlClient.SqlParameter("CPF", beneficiario.CPF));
            parametros.Add(new System.Data.SqlClient.SqlParameter("Id", beneficiario.Id));

            base.Executar("FI_SP_AltBenef", parametros);
        }

        internal void Excluir(long Id)
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Id", Id));

            base.Executar("FI_SP_DelBeneficiario", parametros);
        }

        internal List<DML.Beneficiario> Listar()
        {
            List<System.Data.SqlClient.SqlParameter> parametros = new List<System.Data.SqlClient.SqlParameter>();

            parametros.Add(new System.Data.SqlClient.SqlParameter("Id", 0));

            DataSet ds = base.Consultar("FI_SP_PesquisaBenef", parametros);
            List<DML.Beneficiario> ben = Converter(ds);

            return ben;
        }

        private List<DML.Beneficiario> Converter(DataSet ds)
        {
            List<DML.Beneficiario> lista = new List<DML.Beneficiario>();
            if (ds != null && ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    DML.Beneficiario ben = new DML.Beneficiario();
                    ben.Id = row.Field<long>("Id"); 
                    ben.CPF = row.Field<string>("CPF");
                    ben.Nome = row.Field<string>("Nome");
                    lista.Add(ben);
                }
            }
            return lista;
        }
    }
}

