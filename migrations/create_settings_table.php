<?php

use App\Schema;

Schema::drop('settings');

Schema::create('settings', function ($table) {
    $table->increments('id');
    $table->string('avatar')->nullable();
    $table->string('firstname');
    $table->string('lastname');
    // $table->string('email')->unique();
    // $table->string('password');

    $table->timestamps();
});



