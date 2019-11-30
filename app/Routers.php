<?php

namespace App;


use Pecee\Http\Request;
use Pecee\SimpleRouter\Handlers\IExceptionHandler;
use Pecee\SimpleRouter\Exceptions\NotFoundHttpException;

use Pecee\SimpleRouter\SimpleRouter;

use App\CustomRouterRules;

class Router extends SimpleRouter
{
    /**
     * @throws \Exception
     * @throws \Pecee\Http\Middleware\Exceptions\TokenMismatchException
     * @throws \Pecee\SimpleRouter\Exceptions\HttpException
     * @throws \Pecee\SimpleRouter\Exceptions\NotFoundHttpException
     */
    public static function start(): void
	{
		require_once 'helpers.php';
		require_once ROOT . '/routes/web.php';

		// ERROR HANDLER
		parent::get('/not-found',  function() {
			return view('404');
		});

		parent::error(function(Request $request, \Exception $exception) {
			if($exception instanceof NotFoundHttpException && $exception->getCode() === 404) {
				Router::response()->redirect('/not-found?s=' . url() );
			}
		});

		parent::setDefaultNamespace('\App\Controllers');
		parent::start();
	}

	
}

