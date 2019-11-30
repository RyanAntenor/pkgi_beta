<?php

use App\Schema;

Schema::drop('posts');

Schema::create('posts', function ($table) {
    $table->increments('id');
    $table->string('title');
    $table->text('body');
    $table->integer('created_by')->unsigned();
    $table->timestamps();
 });