<?php

function get($name) {

    $filename = ROOT ."/cache/{$name}.json";

    if (file_exists($filename)) {
        $myfile = fopen( $filename, "r") or die("Unable to open file!");
        $content = fread($myfile,filesize($filename));
        fclose($myfile);
        return $content;
    } else {
        return null;
    }

    
}

function create($name, $content) {
    $file = fopen( ROOT . "/cache/{$name}.json", "w") or die("Unable to open the file");
    fwrite( $file, $content );
    fclose($file);
}