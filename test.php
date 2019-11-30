<?php
require_once   'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

use Models\User;

// echo getenv('DB_HOST');

echo User::all();