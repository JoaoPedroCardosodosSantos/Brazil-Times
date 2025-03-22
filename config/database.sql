CREATE DATABASE blogdb;

USE blogdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(32) NOT NULL
    #is_admin BOOLEAN DEFAULT FALSE 
);

CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, 
    title VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    status ENUM('ativa', 'arquivada', 'deletada') DEFAULT 'arquivada',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    idioma ENUM('português', 'inglês') NOT NULL,
    categoria ENUM(
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
    ) NOT NULL,
    data_publicacao DATE,
    tags VARCHAR(255), 
    noticia TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/*
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    news_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (news_id) REFERENCES news(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
); */