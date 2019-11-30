<?php

namespace App\Middlewares;

use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;

class AuthRoute implements IMiddleware {

    public function handle(Request $request): void 
    {
        session_start();
        $authentication = isset($_SESSION['profile']);

        if( !$authentication ) {
            // $request->setRewriteUrl(url('/'));
            redirect('/login');
        } 
    }
}