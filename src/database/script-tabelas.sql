-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database projetoIndividual;

use projetoIndividual;

create table  usuarios (
    id int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(45) not null,
    senha varchar(45) not null
);

insert into usuarios (nome,email,senha) values ('janete silva', 'janet4200@icloud.com', '123456L');
select * from usuarios;