using DesafioRoman_WebApi.Domains;
using DesafioRoman_WebApi.Interfaces;
using DesafioRoman_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace DesafioRoman_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(Usuario login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);
                Professore professore = _usuarioRepository.buscar(usuarioBuscado.IdUsuario);
                if (usuarioBuscado != null)
                {
                    var Claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                        new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                        new Claim("role", usuarioBuscado.IdTipoUsuario.ToString()),
                        new Claim("idProfessor", professore.IdProfessor.ToString())
                    };
                    var Key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("senaidesafioromanwebapi"));

                    var Creds = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);

                    var meuToken = new JwtSecurityToken(
                            issuer: "senaidesafioroman.webapi",
                            audience: "senaidesafioroman.webapi",
                            claims: Claims,
                            expires: DateTime.Now.AddMinutes(40),
                            signingCredentials: Creds
                        );
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                    });
                }
                return NotFound("Email ou senha Inválido");
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
