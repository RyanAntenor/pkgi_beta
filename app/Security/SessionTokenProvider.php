<?php

namespace App\Security;

use Pecee\Http\Security\ITokenProvider;

class SessionTokenProvider implements ITokenProvider
{

    public function validate(string $token): bool
    {
       
        session_start();
        $csrf_verification  = $_SESSION['csrf_token'];
        $csrf_token = $_SERVER['HTTP_X_CSRF_TOKEN'] ? $_SERVER['HTTP_X_CSRF_TOKEN'] : $token;

        return hash_equals( $csrf_token, $csrf_verification );
    }


    public function getToken(?string $defaultValue = null): ?string 
    {
        session_start();
        if( empty($_SESSION['csrf_key'])) {
            $_SESSION['csrf_key'] = \bin2hex(random_bytes(32));
        }
        //Create csrf token
        $token =  hash_hmac('sha256', 'This is some string key', $_SESSION['csrf_key']);
        $_SESSION['csrf_token'] = $token;
        return $token;
    }

}