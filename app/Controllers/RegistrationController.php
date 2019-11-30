<?php
namespace App\Controllers;

use Models\User;


class RegistrationController 
{
    public function index():string {
        return view('register');
        // response()->json($_SERVER);
    }

    public function create() {
        $fields = input()->all();
        $fields['username'] = $fields['first_name'];
        $fields['firstname'] = $fields['first_name'];
        $fields['lastname'] = $fields['last_name'];
        $fields['password'] = hash_hmac('sha256', $fields['password'], getenv('SECRET_KEY') ) ;
        $fields['account_id']  = hash('adler32', $fields['email']);
        $fields['confirmation_id'] = bin2hex( random_bytes(16) );

        $profile = User::where('email', $fields['email'])->first();


        if( !isset($profile ) ) {
            // echo "creating new";
            $user = User::create($fields);
            $url = $_SERVER[HTTP_HOST] . '/confirm/' . $fields['confirmation_id'];
            echo $url;
            return "The confirmation code is: <a href='//" . $url  ." '>" . $url ."</a> ";
        } else {
            // echo "Existing user" . $_SERVER[HTTP_HOST];

            return view('register', ['message' => 'This account has already been registered.']);
        }
        // $user = User::create($fields);
        // response()->json($fields);


        // response()->json( input()->all() );

    }

    public function confirm($confirmation_id) {
        if( $confirmation_id ) {
            $user = User::where('confirmation_id', $confirmation_id);

            if( $user->first()->confirmed ) {
                return "Your account is already activated.";
            }

            if( isset($user) ) {
                $user->update([
                    'confirmed' => true,
                    'last_logged_in' => today()
                ]);
                
                \session_start();
                $_SESSION['profile'] = $user->first();

                // Create public folder
                $public_folder =  ROOT . '/public/' . getenv('PUBLIC_PATH_FILES') . '/' . $_SESSION['profile']['account_id'];
                if (!file_exists( $public_folder )) {
                    mkdir( $public_folder , 0777, true);
                }

                // response()->json($user->first());

                return view('confirm');
            }
           
        }
       
        // // $user = User::all();

        // // return getenv('DB_HOST');
        // // return $account_id;

        

        // // return view('confirm');
        // // response()->json([
        // //     'email' => input()->get('email').value
        // // ]);

        // // var_dump($user);
        // response()->json($user);

    }
}
    