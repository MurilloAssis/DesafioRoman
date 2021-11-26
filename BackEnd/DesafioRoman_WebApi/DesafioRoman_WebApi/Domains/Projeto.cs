using System;
using System.Collections.Generic;

#nullable disable

namespace DesafioRoman_WebApi.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public int? IdTema { get; set; }
        public int? IdUsuario { get; set; }
        public string TituloProjeto { get; set; }
        public string Descricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
