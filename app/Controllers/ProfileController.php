<?php
namespace App\Controllers;

use Models\User;
use Models\Category;


class ProfileController 
{
    public function index() {
        return "ProfileController";
    }

    public function store() {
        session_start();
        $fields = input()->all();
        // response()->json($fields);
        $user = User::find( $_SESSION['profile']['id'] );
        $user->username = $fields['username'];
        $user->firstname = $fields['firstname'];
        $user->lastname = $fields['lastname'];
        $user->facebook_url = $fields['facebook_url'];
        $user->twitter_url = $fields['twitter_url'];
        $user->website_url = $fields['website_url'];
        $user->pintrest_url = $fields['pintrest_url'];
        $user->description = $fields['description'];

        $user->save();
        $user->categories()->sync($fields['types']);

        redirect('/dashboard/profile');
    }

    public function get() {

        $categories = Category::all();
        $categories = $categories->toArray();

        $user = User::find( $_SESSION['profile']['id'] );
        $profile = $user->categories->toArray();

        $test = [];

        foreach( $categories as &$category ) {
            foreach( $profile as $user_section ) {
                if( $user_section['id'] == $category['id'] ) {
                    $category['is_active'] = true;  
                } 
            }
        }
       


        return view('profile', [
            'user' => $user,
            'categories' => $categories
        ]);
    }


    public function search() {
        $users = User::all();

        return view('search', [
            'users' => $users
        ]);
    }

  
}
    