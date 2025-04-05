<?php
$pasta_destino = "../../../uploads/";
require_once "../../../config/dbConfig.php";

if (empty($_POST['descricao']) || empty($_POST['titulo'])) {
    echo "Erro no envio de dados!";
    exit;
}

try {
    if (isset($_FILES["imagem"]) && $_FILES["imagem"]["error"] == UPLOAD_ERR_OK) {
        $nome_arquivo = basename($_FILES["imagem"]["name"]);
        $nome_arquivo = preg_replace("/[^a-zA-Z0-9.\-_]/", "", $nome_arquivo);
        $caminho_completo = $pasta_destino . time() . "_" . $nome_arquivo;

        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $caminho_completo)) {
            $banco = new Banco();

            if (!$banco->isConectado()) {
                echo 'Falha na conexão!';
                exit;
            }

            $pdo = $banco->getPDO();

            $sql = "INSERT INTO Imagens(Titulo, Link, Descricao) VALUES (:Titulo, :Link, :Descricao)";
            $stmt = $pdo->prepare($sql);

            $stmt->bindValue(":Titulo", $_POST['titulo'], PDO::PARAM_STR);
            $stmt->bindValue(":Link", "/uploads/$nome_arquivo", PDO::PARAM_STR);
            $stmt->bindValue(":Descricao", $_POST['descricao'], PDO::PARAM_STR);

            if ($stmt->execute()) {
                echo "Imagem enviada com sucesso! <br>";
                echo "<a href='$caminho_completo' target='_blank'>Ver Imagem</a><br>";
                echo "<a href='http://localhost/Brazil-Times/app/views/admin/cadastroNoticia.html'>Voltar</a>";
            } else {
                echo 'Falha ao inserir os dados!';
            }

        } else {
            echo "Erro ao mover o arquivo.";
        }
    } else {
        echo "Nenhuma imagem foi enviada.";
    }
} catch (PDOException $e) {
    echo 'Erro: ' . $e->getMessage();
}
?>
