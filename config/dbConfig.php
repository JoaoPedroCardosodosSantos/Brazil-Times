<?php
# Classe de conexão com o banco de dados

class Banco {

    private $dbConfig = [
        'host' => 'localhost',
        'dbname' => 'Blogdb',
        'charset' => 'utf8',
        'user' => 'root',
        'password' => 'Mysql12@root'
    ];

    private $pdo;
    private $tentativas = 5;
    private $statusConexao = false;

    public function __construct() {
        $this->conexao();
    }

    private function conexao() {
        
        $dsn = "mysql:host={$this->dbConfig['host']};dbname={$this->dbConfig['dbname']};charset={$this->dbConfig['charset']}";

        while ($this->tentativas > 0) {

            try {
                $this->pdo = new PDO($dsn, $this->dbConfig['user'], $this->dbConfig['password']);
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->statusConexao = true;
                return;
            } catch (PDOException $e) {
                $this->tentativas--;
                error_log("Erro ao conectar ao banco: " . $e->getMessage()); 
                sleep(1);
            }
        }

        $this->statusConexao = false;
    }

    public function isConectado() {
        return $this->statusConexao;
    }

    public function getPDO() {
        return $this->pdo;
    }
}
?>
