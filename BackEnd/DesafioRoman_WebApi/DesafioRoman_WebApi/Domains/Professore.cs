using System;
using System.Collections.Generic;

#nullable disable

namespace DesafioRoman_WebApi.Domains
{
    public partial class Professore
    {
        public int IdProfessor { get; set; }
        public int? IdEquipe { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Equipe IdEquipeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
