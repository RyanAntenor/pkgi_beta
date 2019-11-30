<?php

use App\Schema;

Schema::drop('category_user');

Schema::create('category_user', function ($table) {
    $table->increments('id');
    $table->integer('category_id')->unsigned();
    $table->integer('user_id')->unsigned();
    $table->timestamps();
 });