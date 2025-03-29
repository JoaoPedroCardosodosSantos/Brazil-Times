<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

require_once '../Tools.php';
require_once '../../../config/dbconfig.php';

$dados = json_decode(file_get_contents('php://input'), true);

if (!Tools::verifyData($dados)) { 
    echo Tools::responseJSON('Dados inválidos ou incompletos', false);
    exit;
}

try {
    $banco = new Banco();

    if (!$banco->isConectado()) {
        echo Tools::responseJSON('Erro ao estabelecer conexão com o banco de dados', false);
        exit;
    }

    $pdo = $banco->getPDO();

    $query = "INSERT INTO posts (user_id, categoria_id, idioma, post_data, post_hora, tags, titulo, descricao, conteudo_noticia)
              VALUES (:user_id, :categoria_id, :idioma, :post_data, :post_hora, :tags, :titulo, :descricao, :conteudo_noticia)";

    $stmt = $pdo->prepare($query);

    $stmt->bindValue(':user_id', $dados['user_id'], PDO::PARAM_INT);
    $stmt->bindValue(':categoria_id', $dados['categoria_id'], PDO::PARAM_INT);
    $stmt->bindValue(':idioma', $dados['idioma'], PDO::PARAM_STR);
    $stmt->bindValue(':post_data', $dados['post_data'], PDO::PARAM_STR);
    $stmt->bindValue(':post_hora', $dados['post_hora'], PDO::PARAM_STR);
    $stmt->bindValue(':tags', $dados['tags'], PDO::PARAM_STR);
    $stmt->bindValue(':titulo', $dados['titulo'], PDO::PARAM_STR);
    $stmt->bindValue(':descricao', $dados['descricao'], PDO::PARAM_STR);
    $stmt->bindValue(':conteudo_noticia', $dados['conteudo_noticia'], PDO::PARAM_STR);

    if ($stmt->execute()) {
        $lastId = $pdo->lastInsertId();
        echo Tools::responseJSON("Dados inseridos com sucesso!", true, ["id_inserido" => $lastId]);
    } else {
        echo Tools::responseJSON('Erro ao inserir os dados no banco', false);
    }

} catch (PDOException $e) {
    echo Tools::responseJSON('Erro ao salvar os dados no banco: ' . $e->getMessage(), false);
}
?>
