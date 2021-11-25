--DML

use RomanTardeG8
go

insert into TipoUsuario(tituloTipoUsuario)
values ('Administrador'), ('Professor');
go

insert into Usuarios(idTipoUsuario, email, senha, nomeUsuario)
values ('1', 'adm@gmail.com', '123', 'adm'), ('2', 'prof@gmail.com', '123', 'professorTeste');
go

insert into Temas(tituloTema)
values ('HQs'), ('Gestão')
go