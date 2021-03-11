<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message = "<html><head>";
        $message .= "
            <h2>Olá, recebemos uma nova mensagem de contato</h2>
            <hr>
            <p>Nome: {$_POST['data']['nome']}</p>
            <p>Email: <a href='mailto:{$_POST['data']['email']}'>{$_POST['data']['email']}</a></p>
            <p>Telefone: {$_POST['data']['mensagem']}</p>
            <p>Empresa: {$_POST['data']['empresa']}</p>
            <p>Mensagem: {$_POST['data']['mensagem']}</p>
            <hr>
            Atenciosamente, TSALES CODE.
        ";

        $message .="</head></html>";
        if(mail("suporte@tutoriaiseinformatica.com,thiago_salests@hotmail.com", "[TSALES CODE - Mensagem de contato]", $message, $headers)){
            echo json_encode(["status" => true]);
        }else{
            echo json_encode(["status" => false]);
        }
    }