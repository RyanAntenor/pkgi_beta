<?php

namespace App;

use Illuminate\Database\Capsule\Manager as Capsule;

class DB {

    private static $capsule;

    public static function connect(): void {

        if( !isset(self::$capsule)) {
            self::$capsule = new Capsule;

            self::$capsule->addConnection([
                'driver'    => 'mysql',
                'host'      => getenv('DB_HOSTNAME'),
                'database'  => getenv('DB_NAME'),
                'username'  => getenv('DB_USERNAME'),
                'password'  => getenv('DB_PASSWORD'),
                'prefix'    => getenv('DB_PREFIX'),
            ]);
    
            // Set the event dispatcher used by Eloquent models... (optional)
            // use Illuminate\Events\Dispatcher;
            // use Illuminate\Container\Container;
            // self::$capsule->setEventDispatcher(new Dispatcher(new Container));
    
    
            // Make self::$apsule instance available globally via static methods... (optional)
            self::$capsule->setAsGlobal();
    
            // Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
            self::$capsule->bootEloquent();
        }

    }
}

class Schema {
    public static function create($name, $callback) {
        try {
            DB::connect();
            Capsule::schema()->create($name, $callback);
        } catch (\Exception $e) {
            echo "Unable to create database table: ${name}";
        }
    }

    public static function drop($name) {
        DB::connect();
        Capsule::schema()->dropIfExists($name);
    }
};
