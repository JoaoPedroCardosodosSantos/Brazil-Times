<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Origin: *");

require_once '../Tools.php';
require_once '../../../config/dbConfig.php';

$data = json_decode(file_get_contents('php://input'));

$user_id = 1;
$status = "Publicado";
$pasta_destino = "../../../uploads";
$caminho_completo = "";
$image_response = "";

try {       
    $banco = new Banco();

    if (!$banco->isConectado()) {
        Tools::responseJSON('Falha na conexão!', false);
        exit;
    }

    $pdo = $banco->getPDO();

    $sql = "INSERT INTO Noticia 
        (User_id, Idioma, Categoria, Data, Hora, Tags, Titulo, Descricao, Noticia, Status) 
        VALUES 
        (:User_id, :Idioma, :Categoria, :Data, :Hora, :Tags, :Titulo, :Descricao, :Noticia, :Status)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindValue(":User_id", $user_id, PDO::PARAM_INT);
    $stmt->bindValue(":Idioma", $data->idioma, PDO::PARAM_STR);
    $stmt->bindValue(":Categoria", $data->categoria, PDO::PARAM_STR);
    $stmt->bindValue(":Data", $data->data, PDO::PARAM_STR);
    $stmt->bindValue(":Hora", $data->hora, PDO::PARAM_STR);
    $stmt->bindValue(":Tags", json_encode($data->tags), PDO::PARAM_STR);
    $stmt->bindValue(":Titulo", $data->titulo, PDO::PARAM_STR);
    $stmt->bindValue(":Descricao", $data->descricao, PDO::PARAM_STR);
    $stmt->bindValue(":Noticia", $data->noticia, PDO::PARAM_STR);
    $stmt->bindValue(":Status", $status, PDO::PARAM_STR);

    if ($stmt->execute()) {
        Tools::responseJSON('Dados inseridos com sucesso!,', true);
    } else {
        Tools::responseJSON('Falha ao inserir os dados!', false);
        
    }
} catch (PDOException $e) {
    Tools::responseJSON('Erro: '. $e->getMessage(), false);
    
}

?>




