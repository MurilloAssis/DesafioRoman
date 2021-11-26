--DDL

create database RomanTardeG8
go

use RomanTardeG8
go

create table TipoUsuario (
idTipoUsuario tinyint primary key identity(1,1),
tituloTipoUsuario varchar(50) unique not null
);
go

create table Usuarios (
idUsuario int primary key identity(1,1),
idTipoUsuario tinyint foreign key references TipoUsuario(idTipoUsuario),
email varchar(256) unique not null,
senha varchar(100) not null,
nomeUsuario varchar(500) not null
);
go

create table Temas (
idTema int primary key identity(1,1),
tituloTema varchar(300) unique not null
);
go

create table Projetos (
idProjeto int primary key identity(1,1),
idTema int foreign key references Temas(idTema),
idUsuario int foreign key references Usuarios(idUsuario),
tituloProjeto varchar(200) unique not null,
descricao varchar(600) not null
);
go

create table Equipes (
idEquipe int primary key identity(1,1),
nomeEquipe varchar(100) unique not null
);

create table professores (
	idProfessor int primary key identity(1,1),
	idEquipe int foreign key references Equipes(idEquipe),
	idUsuario int foreign key references Usuarios(idUsuario)
);