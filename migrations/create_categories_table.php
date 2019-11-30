<?php

use App\Schema;

Schema::drop('categories');

Schema::create('categories', function ($table) {
    $table->increments('id');
    $table->string('name');
    $table->string('permalink');
    $table->timestamps();
 });