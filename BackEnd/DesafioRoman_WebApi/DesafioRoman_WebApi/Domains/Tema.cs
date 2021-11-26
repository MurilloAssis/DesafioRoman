using System;
using System.Collections.Generic;

#nullable disable

namespace DesafioRoman_WebApi.Domains
{
    public partial class Tema
    {
        public Tema()
        {
            Projetos = new HashSet<Projeto>();
        }

        public int IdTema { get; set; }
        public string TituloTema { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
