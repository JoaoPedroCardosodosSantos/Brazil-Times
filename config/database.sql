create database blogdb;

use blogdb;

create table users (
    id int auto_increment primary key,
    username varchar(50) not null unique,
    password varchar(32) not null,
    is_admin boolean default false, -- define se o usuário é admin
);

create table news (
    id int auto_increment primary key,
    user_id int not null, 
    title varchar(255) not null,
    descricao text not null unique,
    status enum('ativa', 'arquivada', 'deletada') default 'arquivada',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key (user_id) references users(id),
    idioma ('português', 'inglês'),
    categoria ('Segurança de Redes',
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
    'SOC (Security Operations Center)')
    data publicacao date,
    tags varchar(50) not null, 
    noticia text not null unique,

);


/**
 create table comments (
    id int auto_increment primary key,
    news_id int not null,
    user_id int not null,
    content text not null,
    created_at timestamp default current_timestamp,
    foreign key (news_id) references news(id),
    foreign key (user_id) references users(id)
); **/
