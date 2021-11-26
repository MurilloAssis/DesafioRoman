using System;
using System.Collections.Generic;

#nullable disable

namespace DesafioRoman_WebApi.Domains
{
    public partial class Equipe
    {
        public Equipe()
        {
            Professores = new HashSet<Professore>();
        }

        public int IdEquipe { get; set; }
        public string NomeEquipe { get; set; }

        public virtual ICollection<Professore> Professores { get; set; }
    }
}
