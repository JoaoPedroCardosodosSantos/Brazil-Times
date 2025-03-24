<?php
class Rota {
    private $rotas = [
        '/' => '/app/views/user/index.html',
        '/public' => '/app/views/user/index.html',
        '/docs' => '/docs/README.html',
        '/app' => '/app/views/user/index.html',
        '/app/views' => '/app/views/user/index.html',
        '/404' => '/app/views/errors/404_Not_Found.html'
    ];

    public function __construct() {
        $this->handleRouting();
    }

    private function handleRouting() {
        $uri = $this->getCleanUri();
        $path = $this->rotas[$uri] ?? $this->rotas['/404'];
        $httpCode = isset($this->rotas[$uri]) ? 200 : 404;

        $this->serveContent($path, $httpCode);
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

    private function serveContent($path, $httpCode) {
        $fullPath = $_SERVER['DOCUMENT_ROOT'] . $path;
        if (file_exists($fullPath)) {
            http_response_code($httpCode);
            include $fullPath;
            exit;
        } else {
            http_response_code(500);
            echo "Erro interno: Arquivo não encontrado.";
            exit;
        }
    }
}