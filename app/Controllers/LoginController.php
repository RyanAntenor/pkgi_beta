<?php
namespace App\Controllers;

use Models\User;
use App\Security\JWTToken;

class LoginController 
{
    public function login() {
        return view('login');
    }
    

    public function auth() {
        $values = input()->all();
        $profile = User::where("email", $values['email'])->first();



        if( isset($profile ) ) {
            if( $profile->attemps >= getenv('MAX_ATTEMPS') ) {
                response()->json(["status" => "Max attemps reached. Contact customer support to reactivate your account"]);
            }
            
            if( !$profile->confirmed ) {
                return view('login', ['error' => "Please confirm your registartion before login." ]);
                exit;
            }


            if( $this->validate($profile, $values['password']) && $profile->confirmed ) {
                $profile->attemps = 0;
                $profile->save();
                session_start();
                $_SESSION['profile'] = $profile;
                redirect('/dashboard');
                
            } else {
                $profile->attemps++;
                $profile->save();
                return view('login', ['error' => "invalid username or password" ]);
            }
        } else {
            return view('login', ['error' => "invalid username or password" ]);
        }
    }

    private function validate($profile, $password) {
        $user_input = hash_hmac('sha256', $password, SECRET_KEY );
        return hash_equals($profile->password, $user_input);
    }

    public function signout() {
        session_start();
        session_destroy();
        redirect('/');
    }
}
    