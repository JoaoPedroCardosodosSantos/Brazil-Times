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