<?php

namespace App;

class Mail {

    private $params = [];
    private $mailer;
    private static $instance = null;

    private $smtp = [];

    public function __construct() {
        $this->smtp['server'] = getenv("SMTP_SERVER");
        $this->smtp['port'] = getenv("SMTP_PORT");
        $this->smtp['username'] = getenv("SMTP_USERNAME");
        $this->smtp['password'] = getenv("SMTP_PASSWORD");




        $transport = (new \Swift_SmtpTransport( $this->smtp['server'], $this->smtp['port'] ))
        ->setUsername( $this->smtp['username'] )
        ->setPassword( $this->smtp['password'] )
        ;

        // Create the Mailer using your created Transport
        $this->mailer = new \Swift_Mailer($transport);

    }

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Mail();
        }
        
        return self::$instance;
    }


    private function __clone() {}

    public function __set($key, $value) {
        // assign value for key UserID to _userID property
        $this->params[$key] = $value;
    }

    public function __get($key) {
    // return value of _userID for UserID property
        return $this->params[$key];
    }
    

    public function send() {
        // // Create a message
        $message = (new \Swift_Message($this->params['subject']))
        ->setFrom($this->params['from'])
        ->setTo($this->params['to'])
        ->setBody($this->params['body'])
        ;

        return $this->mailer->send($message);
    }
}

// $mail = new Mail();
// $mail->subject = "Ryan test mail";
// $mail->from = ['johndoe@email.com' => 'John Doe'];
// $mail->to = ['janedoe@email.com'];
// $mail->body = 'This is a test message';


// echo $mail->send();
