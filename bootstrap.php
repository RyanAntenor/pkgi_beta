<?php

require_once  dirname(__FILE__) . '/config/setup.php';
require_once ROOT . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

define('UPLOAD_DIR',  ROOT .  getenv('UPLOAD_PATH'));
define('PUBLIC_PATH_FILES', getenv('PUBLIC_PATH_FILES'));
define('SECRET_KEY', getenv('SECRET_KEY'));


// // Database connection
// // require_once ROOT . '/database.php';
require_once ROOT . '/config/view.php';
// require_once ROOT . '/config/cache.php';

// // Start the routing


\App\Router::start();

// Create the Transport
  

/**
 * The default namespace for route-callbacks, so we don't have to specify it each time.
 * Can be overwritten by using the namespace config option on your routes.
 */

// SimpleRouter::setDefaultNamespace('\App\Controller');
// Start the routing
// SimpleRouter::start();




// $transport = (new \Swift_SmtpTransport('mail.westbesthome.com', 2525))
// ->setUsername('contact@westbesthome.com')
// ->setPassword('yUsDn3nqZvfW')
// ;

// // Create the Mailer using your created Transport
// $mailer = new Swift_Mailer($transport);

// // Create a message
// $message = (new Swift_Message('Test Subject'))
// ->setFrom(['contact@westbesthome.com' => 'John Doe'])
// ->setTo(['ryan.antenor@gmail.com'])
// ->setBody('This is a test message')
// ;

// // Send the message
// $result = $mailer->send($message);

