<?php

require_once '../../config/dbconfig.php';

header("Content-Type: application/json");

$json = file_get_contents("php://input");
$dados = json_decode($json, true);

if (!$dados) {
    echo json_encode(["erro" => true, "mensagem" => "Dados inválidos."]);
    echo false;
    exit;
}

try {

    $banco = new Banco();
    $pdo = $banco->getPDO();

    $sql = "INSERT INTO noticia (idioma, categoria, data, hora, tags, titulo, descricao, noticia) 
            VALUES (:idioma, :categoria, :data, :hora, :tags, :titulo, :descricao, :noticia)";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':idioma' => $dados['idioma'],
        ':categoria' => $dados['categoria'],
        ':data' => $dados['data'],
        ':hora' => $dados['hora'],
        ':tags' => $dados['tags'],
        ':titulo' => $dados['titulo'],
        ':descricao' => $dados['descricao'],
        ':noticia' => $dados['noticia']
    ]);

    echo true;

} catch (PDOException $e) {
    echo json_encode(["erro" => true, "mensagem" => "Erro ao salvar notícia: " . $e->getMessage()]);
}
?>
