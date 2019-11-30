<?php

namespace App\Middlewares;

use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;

class Auth implements IMiddleware {

    public function handle(Request $request): void 
    {
        session_start();
        $authentication = isset($_SESSION['user']);

        if( !$authentication ) {
            redirect('/');
        } 

    }
}