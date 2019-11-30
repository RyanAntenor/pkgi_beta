<?php


// Router info: https://github.com/skipperbent/simple-php-router#installation
// use App\Core\Router;



use App\Router as Route;
use App\Security\SessionTokenProvider;
use App\Middlewares\CsrfVerifier;

use Models\User;

use Models\Photo;
use Models\Category;

$verifier = new CsrfVerifier();
$verifier->setTokenProvider(new SessionTokenProvider());

Route::csrfVerifier($verifier);

Route::group([],function () {
    Route::get('/', 'HomeController@index');
    Route::post('/', 'HomeController@store');
    Route::get('/login', 'LoginController@login');
    Route::post('/login', 'LoginController@auth');
    Route::get('/logout', 'LoginController@signout');

    Route::get('register', 'RegistrationController@index');
    Route::post('register', 'RegistrationController@create');
    Route::get('confirm/{id}', 'RegistrationController@confirm');

    Route::get('/post', 'PostController@index');
    Route::get('/post/{id}', 'PostController@get');
    Route::get('/post/create', 'PostController@create');
    Route::post('/post/create', 'PostController@store');


});

Route::group([ 'prefix' => '/dashboard', 'middleware' => \App\Middlewares\AuthRoute::class ], function () {
    Route::get('/', 'DashboardController@index' );

    Route::get('/media', function () {
        return view('media');
    });

    Route::get('posts', 'PostController@index');
    Route::get('post/create', 'PostController@create');

    Route::get('/search', 'ProfileController@search');

    Route::get('/projects', 'ProjectControlller@index');
    Route::get('/projects/search', 'ProjectController@search');

    Route::get('/bookings', 'BookingController@index');

    Route::get('/profile', 'ProfileController@get');
    Route::post('/profile', 'ProfileController@store');
});

Route::group(['prefix' => 'api'], function () {
    Route::get('/upload', 'UploadController@index');
    Route::post('/upload', 'UploadController@store');
    Route::get('/upload/all', 'UploadController@all');
    Route::get('/media/all', 'MediaController@index');
});


Route::get('/view/all', function() {
    $photos = Photo::all();
    response()->json($photos);
}); 
