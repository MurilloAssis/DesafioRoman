using DesafioRoman_WebApi.Context;
using DesafioRoman_WebApi.Domains;
using DesafioRoman_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafioRoman_WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        RomanContext ctx = new RomanContext();

        public Professore buscar(int id)
        {
            return ctx.Professores.FirstOrDefault(u => u.IdUsuario == id);
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
       
    }
}
