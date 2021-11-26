using DesafioRoman_WebApi.Context;
using DesafioRoman_WebApi.Domains;
using DesafioRoman_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafioRoman_WebApi.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext();
        public void CadastrarProjeto(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);
            ctx.SaveChanges();
        }

        public List<Projeto> ListarProjetos()
        {
            return ctx.Projetos
                .Select(p => new Projeto
                {
                    IdProjeto = p.IdProjeto,
                    IdTema = p.IdTema,
                    IdProfessor = p.IdProfessor,
                    TituloProjeto = p.TituloProjeto,
                    Descricao = p.Descricao,
                    IdTemaNavigation = new Tema()
                    {
                        IdTema = p.IdTemaNavigation.IdTema,
                        TituloTema = p.IdTemaNavigation.TituloTema
                    },
                    IdProfessorNavigation = new Professore()
                    {
                        IdProfessor = p.IdProfessorNavigation.IdProfessor,
                        IdUsuario = p.IdProfessorNavigation.IdUsuarioNavigation.IdUsuario,
                        IdUsuarioNavigation = new Usuario()
                        {
                            IdUsuario = p.IdProfessorNavigation.IdUsuarioNavigation.IdUsuario,
                            NomeUsuario = p.IdProfessorNavigation.IdUsuarioNavigation.NomeUsuario
                        },
                        IdEquipeNavigation = new Equipe()
                        {
                            IdEquipe = p.IdProfessorNavigation.IdEquipeNavigation.IdEquipe,
                            NomeEquipe = p.IdProfessorNavigation.IdEquipeNavigation.NomeEquipe,
                        }

                        
                    }
                    
                })
                .ToList();
        }
    }
}
