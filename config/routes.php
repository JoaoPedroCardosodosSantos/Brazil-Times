<?php
class Rota {
    private $rotas = [
        '/Brazil-Times' => '/app/views/user/index.html',
        '/Brazil-Times/public' => '/app/views/user/index.html',
        '/Brazil-Times/docs' => '/docs/README.html',
        '/Brazil-Times/app' => '/app/views/user/index.html',
        '/Brazil-Times/app/views' => '/app/views/user/index.html',
        '/404' => '/app/views/errors/404_Forbidden.html' 
    ];

    public function __construct() {
        $this->handleRouting();
    }

    private function handleRouting() {
        $uri = $this->getCleanUri();

        if (isset($this->rotas[$uri])) {
            $this->redirect($this->rotas[$uri]);
        } else {
            $this->redirect($this->rotas['/404'], 404);
        }
    }

    private function getCleanUri() {
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $uri = rtrim($uri, '/');
        $basePath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');

        if ($basePath && strpos($uri, $basePath) === 0) {
            $uri = substr($uri, strlen($basePath));
        }

        return $uri ?: '/';
    }

    private function redirect($path, $httpCode = 301) {
        if ($httpCode === 404) {
            if (file_exists($_SERVER['DOCUMENT_ROOT'] . $path)) {
                http_response_code(404);
                include $_SERVER['DOCUMENT_ROOT'] . $path;
                exit;
            }
        } elseif (!headers_sent()) {
            header("Location: $path", true, $httpCode);
            exit;
        }
    }
}

// Instancia a classe para iniciar o roteamento
new Rota();
?>