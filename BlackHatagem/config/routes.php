<?php
# Script de roteamento
class Rota {

    private $rotas = [
        '/Brazil-Times/' => 'Location: http://localhost/Brazil-Times/app/views/user/index.html',
        '/Brazil-Times/public/' => 'Location: http://localhost/Brazil-Times/app/views/user/index.html',
        '/Brazil-Times/docs/' =>'Location: http://localhost/Brazil-Times/docs/README.html',
        '/Brazil-Times/app/' => 'Location: http://localhost/Brazil-Times/app/views/user/index.html',
        '/Brazil-Times/app/views/' => 'Location: http://localhost/Brazil-Times/app/views/user/index.html'
    ];

    public function __construct(){

        foreach($this->rotas as $chave => $valor) {

            if($_SERVER['REQUEST_URI'] == $chave) {
                header($valor);
                exit;
            }

        }
    }
    
}
?>