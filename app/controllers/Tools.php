<?php

class Tools {

    public static function responseJSON($message, $success, $data = null) {
        $response = [
            'Message' => $message,
            'success' => $success
        ];

        if ($success && $data !== null) {
            $response['Data'] = $data;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }   

    public static function verifyData($data) {
        if (!is_object($data) || empty((array)$data)) {
            self::responseJSON('Erro: Tipo de dado incompatível!', false);
            return false;
        }

        foreach ((array)$data as $key => $value) {
            if (empty($value) && $value !== '0' && $value !== 0) {
                self::responseJSON("Erro: O campo '{$key}' está vazio ou nulo!", false);
                return false;
            }
        }

        return true;
    }
}

?>
