<?php

class Tools {

    public static function responseJSON($message, $success, $resultado = null) {

        $jsonResponse = json_encode([
            'message' => $message,
            'sucesso' => $success,
            'resultado' => $resultado ?? null,
        ], JSON_UNESCAPED_UNICODE);
    
        return $jsonResponse;
        
    }

    public static function verifyData($array) {

        if($array && is_array($array)) {
    
           $valoresNulos = '';
    
            foreach ($array as $key => $valor) {
               if(!$valor) {
                    $valoresNulos .= "$key, ";
               }
            }
    
            if(!empty($valoresNulos)) {

                $valoresNulos = rtrim($valoresNulos, ', ');
                echo self::responseJSON("Valores nulos: $valoresNulos", false);
                exit();

            } else {
    
                return true;
            }
    
        } else {
    
            echo self::responseJSON("Tipo de dados incompatível!", false);
            exit();
    
        }
    
    }

}