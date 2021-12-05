﻿using DesafioRoman_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafioRoman_WebApi.Interfaces
{
    interface IUsuarioRepository
    {
        Usuario Login(string email, string senha);
        Professore buscar(int id);
    }
}
