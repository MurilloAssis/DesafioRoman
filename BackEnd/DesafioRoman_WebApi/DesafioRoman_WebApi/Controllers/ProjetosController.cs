using DesafioRoman_WebApi.Domains;
using DesafioRoman_WebApi.Interfaces;
using DesafioRoman_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafioRoman_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _projetoRepository { get; set; }

        public ProjetosController()
        {
            _projetoRepository = new ProjetoRepository();
        }

        [HttpGet]
        public IActionResult ListarProjetos()
        {
            List<Projeto> lista = _projetoRepository.ListarProjetos();
            return Ok(lista);
        }

        [HttpPost]
        public IActionResult CadastrarProjeto(Projeto novoProjeto)
        {
            _projetoRepository.CadastrarProjeto(novoProjeto);
            return StatusCode(201);
        }
    }
}
