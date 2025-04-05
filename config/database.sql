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
