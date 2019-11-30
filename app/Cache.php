<?php

namespace App;

class Cache {
    public static function get($key, $callback = null) {

        $file_pointer = ROOT . '/storage/cache/' . $key; 
        
        if (file_exists($file_pointer))  
        { 
            return  file_get_contents( $file_pointer);
        } else {
            $content = call_user_func($callback) ;
            file_put_contents( $file_pointer, $content );
            return $content;
        }
    }
}