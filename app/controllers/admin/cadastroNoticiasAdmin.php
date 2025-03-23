<?php

if(isset ($_GET['objeto'])) {

    $objetoCodificado = $_GET['objeto'];

    $objeto = json_decode(urldecode($objetoCodificado), true); // Dado json decodificado

    echo true;
} else {
    echo false;
}
?>