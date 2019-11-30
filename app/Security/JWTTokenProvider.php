<?php

namespace App\Security;

use Ahc\Jwt\JWT;

class JWTToken {

    private $secret_key;

    private function __clone() {}
    private function __copy() {}


    public function __construct() {
        $this->secret_key = getenv('TOKEN_KEY');
    }

    public function createToken() {
        return (new JWT( $this->secret_key, 'HS512', 1800))->encode(['uid' => 1, 'scopes' => ['user']]);
    }

    public function getPayload($token) {
        return (new JWT( $this->secret_key, 'HS512', 1800))->decode($token);
    }

    public function getToken() {
        return empty($_SERVER['HTTP_AUTHORIZATION'] );
    }
}


function get_token() {
    return ( new JWTToken() )->getToken();
}
function create_token() {
    return ( new JWTToken() )->createToken();
}

function validate_token($token) {
    return ( new JWTToken() )->getPayload($token);
}