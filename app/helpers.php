<?php
use Pecee\SimpleRouter\SimpleRouter as Router;
use Pecee\Http\Url;
use Pecee\Http\Response;
use Pecee\Http\Request;

use Carbon\Carbon;

/**
 * Get url for a route by using either name/alias, class or method name.
 *
 * The name parameter supports the following values:
 * - Route name
 * - Controller/resource name (with or without method)
 * - Controller class name
 *
 * When searching for controller/resource by name, you can use this syntax "route.name@method".
 * You can also use the same syntax when searching for a specific controller-class "MyController@home".
 * If no arguments is specified, it will return the url for the current loaded route.
 *
 * @param string|null $name
 * @param string|array|null $parameters
 * @param array|null $getParams
 * @return \Pecee\Http\Url
 * @throws \InvalidArgumentException
 */
function url(?string $name = null, $parameters = null, ?array $getParams = null): Url
{
    return Router::getUrl($name, $parameters, $getParams);
}
/**
 * @return \Pecee\Http\Response
 */
function response(): Response
{
    return Router::response();
}
/**
 * @return \Pecee\Http\Request
 */
function request(): Request
{
    return Router::request();
}
/**
 * Get input class
 * @param string|null $index Parameter index name
 * @param string|null $defaultValue Default return value
 * @param array ...$methods Default methods
 * @return \Pecee\Http\Input\InputHandler|\Pecee\Http\Input\IInputItem|string
 */
function input($index = null, $defaultValue = null, ...$methods)
{
    if ($index !== null) {
        return request()->getInputHandler()->getValue($index, $defaultValue, ...$methods);
    }
    return request()->getInputHandler();
}
/**
 * @param string $url
 * @param int|null $code
 */
function redirect(string $url, ?int $code = null): void
{
    if ($code !== null) {
        response()->httpCode($code);
    }
    response()->redirect($url);
}
/**
 * Get current csrf-token
 * @return string|null
 */
function csrf_token(): ?string
{
    // $baseVerifier = Router::router()->getCsrfVerifier();
    // $baseVerifier->setCsrfVerifier( 'test'  );

    // $baseVerifier = base64_encode("test" . "whatever");
    // if ($baseVerifier !== null) {
    //     // return $baseVerifier->getTokenProvider()->getToken();
    //     echo "hello";
    //     return $baseVerifier;
    // }
    // return null;

    // Router::router()->setCsrfVerifier( base64_encode("testing") );

    

    // return "thisIsMyToken";
    // return Router::router()->getCsrfVerifier()->getTokenProvider()->getToken();

    return Router::router()->getCsrfVerifier()->getTokenProvider()->getToken();
}

function create_token() {
    return ( new JWTToken() )->createToken();
}

function validate_token($token) {
    return ( new JWTToken() )->getPayload($token);
}


function today() {
    return Carbon::now();
}

function user_media_folder() {
    \session_start();
    // $user_folder = UPLOAD_DIR . '/'  .  $_SESSION['profile'] ['account_id']  . '/';
    $user_folder = UPLOAD_DIR . '/'  .  $_SESSION['profile'] ['account_id']  . '/';

    return $user_folder;
}

function user_media_folder_public() {
    \session_start();
    return PUBLIC_PATH_FILES . '/' . $_SESSION['profile'] ['account_id'] . '/';
}



function dd($params) {
    echo "<pre>";
    print_r($params);
}