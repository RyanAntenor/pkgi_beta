<?php

// // // INFO: http://platesphp.com/v3/

function view($name, $arr = []) {

    $profile = $_SESSION['profile'];
    $arr["csrf_token"] =  csrf_token();
    $arr["username"] = $profile["username"] ;
    $arr["app_title"] = getenv('APP_NAME');

    $loader = new \Twig\Loader\FilesystemLoader(ROOT . '/views');
    
    $twig = new \Twig\Environment($loader);
    $html_template = $twig->render("${name}.twig", $arr);

    return $html_template;
}