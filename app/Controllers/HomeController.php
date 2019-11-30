<?php
namespace App\Controllers;

use Models\User;
// use Models\Post;
use App\Cache;
use App\Mail;
use Illuminate\Support\Facades\DB;
use App\Router;

use Models\Category;

class HomeController 
{
    public function index() {
        return view('home');
    }

    public function store() {
       
    }
}   
    