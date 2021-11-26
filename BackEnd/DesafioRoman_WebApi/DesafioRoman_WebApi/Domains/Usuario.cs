using System;
using System.Collections.Generic;

#nullable disable

namespace DesafioRoman_WebApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Professores = new HashSet<Professore>();
            Projetos = new HashSet<Projeto>();
        }

        public int IdUsuario { get; set; }
        public byte? IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string NomeUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Professore> Professores { get; set; }
        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
