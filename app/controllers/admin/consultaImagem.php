<?php
require_once "../../../config/dbConfig.php";

$baseURL = "http://localhost/Brazil-Times/";

$tituloBusca = isset($_GET['titulo']) ? $_GET['titulo'] : '';

try {
    $banco = new Banco();

    if (!$banco->isConectado()) {
        echo "Erro na conexão com o banco de dados!";
        exit;
    }

    $pdo = $banco->getPDO();

    $sql = "SELECT * FROM Imagens WHERE Titulo LIKE :titulo ORDER BY id DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':titulo', '%' . $tituloBusca . '%', PDO::PARAM_STR);
    $stmt->execute();

    $imagens = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($imagens) > 0) {
        echo "<h2>Resultado da pesquisa</h2><ul>";

        foreach ($imagens as $img) {
            $imagemURL = $baseURL . htmlspecialchars($img['Link']);

            echo "<li>";
            echo "<strong>Título:</strong> " . htmlspecialchars($img['Titulo']) . "<br>";
            echo "<img src='$imagemURL' alt='Imagem' width='200' height='200'><br>";
            echo "<strong>Descrição:</strong> " . htmlspecialchars($img['Descricao']) . "<br><br>";
            echo "<a href='$imagemURL' target='_blank'>Ver Imagem em nova aba</a><br>";
            echo "<a href='http://localhost/Brazil-Times/app/views/admin/cadastroNoticia.html'>Volta para a tela inicial</a>";
            echo "</li><br>";
        }

        echo "</ul>";
    } else {
        echo "Nenhuma imagem encontrada com esse título.";
    }

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
