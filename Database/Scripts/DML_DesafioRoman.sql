--DML

use RomanTardeG8
go


insert into TipoUsuario(tituloTipoUsuario)
values ('Administrador'), ('Professor');
go

insert into Usuarios(idTipoUsuario, email, senha, nomeUsuario)
values ('1', 'adm@gmail.com', '123', 'adm'), ('2', 'profDev@gmail.com', '123', 'professorDev'), ('2', 'profMultimidia@gmail.com', '123', 'professorMultimidia'));
go

insert into Temas(tituloTema)
values ('HQs'), ('Gestão')
go

insert into Equipes(nomeEquipe)
values ('Desenvolvimento de Sistemas'), ('Multimidia')

insert into Professores(idEquipe, idUsuario)
values (1,3), (2,2)

insert into Projetos(idTema, idProfessor, tituloProjeto, descricao)
values (2, 2, 'Gestão de projetos', 'Este projetos trata-se de uma atividade em grupo para os alunos desenvolverem sua habilidades para gerir seus projetos')