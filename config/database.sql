<<<<<<< HEAD
create database blogdb;

use blogdb;

create table usuario (
    id int auto_increment primary key,
    nomeUsuario varchar(50) NOT NULL UNIQUE,
    senha varchar(32) NOT NULL
    -- is_admin boolean default false
);

create table noticias (
    id int auto_increment primary key,
    -- user_id int not null,
    titulo varchar(255) not null,
    descricao text not null,
    categoria enum(
        'Segurança de Redes',
        'Segurança de Aplicações',
        'Segurança em Cloud',
        'Segurança de Endpoint',
        'Segurança de Banco de Dados',
        'Criptografia',
        'Forense Digital',
        'Pentesting',
        'Engenharia Reversa',
        'Red Team',
        'Blue Team',
        'Threat Intelligence',
        'Gestão de Identidade e Acesso (IAM)',
        'Análise de Malware',
        'Segurança de IoT',
        'Segurança de Sistemas Operacionais',
        'Segurança Mobile',
        'Governança, Risco e Compliance (GRC)',
        'SOC (Security Operations Center)'
    ) not null,
    data_publicacao date,
    tags varchar(40), 
    noticia text not null,
    -- foreign key (user_id) references users(id),
    hora varchar(5) not null
	-- status enum('ativa', 'arquivada', 'deletada') default 'arquivada',
    /* created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp, */
    -- idioma enum('português', 'inglês') not null,
);

/*
create table comments (
    id int auto_increment primary key,
    news_id int not null,
    user_id int not null,
    content text not null,
    created_at timestamp defatult current_timestamp,
    foreign key (news_id) references news(id),
    foreign key (user_id) references users(id)
); */
=======
CREATE DATABASE Blogdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE Blogdb;

CREATE TABLE Usuarios(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(40) NOT NULL UNIQUE,
    Email VARCHAR(60) NOT NULL UNIQUE,
    Senha VARCHAR(225) NOT NULL,
    Idade INT CHECK (Idade >= 12 AND Idade <= 100),
    User_Name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE Imagens(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(40) NOT NULL UNIQUE,
    Link VARCHAR(250) NOT NULL UNIQUE,
    Descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Noticia ( 
    Id INT AUTO_INCREMENT PRIMARY KEY,
    User_id INT NOT NULL,
    Idioma ENUM('pt-br', 'en'),
    Categoria ENUM(
        'Segurança de Redes',
        'Segurança de Aplicações',
        'Segurança em Cloud',
        'Segurança de Endpoint',
        'Segurança de Banco de Dados',
        'Criptografia',
        'Forense Digital',
        'Pentesting',
        'Engenharia Reversa',
        'Red Team',
        'Blue Team',
        'Threat Intelligence',
        'Gestão de Identidade e Acesso (IAM)',
        'Análise de Malware',
        'Segurança de IoT',
        'Segurança de Sistemas Operacionais',
        'Segurança Mobile',
        'Governança, Risco e Compliance (GRC)',
        'SOC (Security Operations Center)',
        'Linux'
    ) NOT NULL,
    Data DATE NOT NULL,
    Hora TIME NOT NULL,
    Tags JSON NOT NULL,
    Titulo VARCHAR(100) NOT NULL UNIQUE,
    Descricao VARCHAR(100) NOT NULL UNIQUE,
    Noticia TEXT NOT NULL,
    Data_Criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Data_Atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Status ENUM('Publicado', 'Rascunho', 'Removido') NOT NULL,
    FOREIGN KEY (User_id) REFERENCES Usuarios(Id) ON DELETE CASCADE
);

-- Adicione um usuário
INSERT INTO Usuarios(Nome, Email, Senha, Idade, User_Name) VALUES (
    'Nome do usuario',
    'emaildousuario@gmail.com',
    'J2563&%$@?//QQE8[]',
    23,
    'User Name'
);
>>>>>>> main
