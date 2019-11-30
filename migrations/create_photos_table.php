<?php

use App\Schema;

Schema::drop('photos');

Schema::create('photos', function ($table) {
    $table->increments('id');
    $table->string('filepath');
    $table->boolean('is_active')->default(true);
    $table->string('title')->nullable();
    $table->integer('user_id')->unsigned();
    $table->integer('category_id')->unsigned()->default(0);
    $table->timestamps();
 });