<?php

use App\Schema;

Schema::drop('users');

Schema::create('users', function ($table) {
    $table->increments('id');
    $table->string('username');
    $table->integer('attemps')->default(0);
    $table->string('firstname')->nullable();
    $table->string('lastname')->nullable();
    $table->string('description')->nullable();
    $table->boolean('is_logged')->default(false);
    $table->string('last_logged_in')->nullable();
    $table->boolean('is_active')->default(false);
    $table->boolean('confirmed')->default(false);
    $table->string('confirmation_id')->nullable();
    $table->string('account_id')->unique();
    $table->string('email')->unique();
    $table->boolean('agree_toc')->default(false);
    $table->string('facebook_url')->nullable();
    $table->string('twitter_url')->nullable();
    $table->string('website_url')->nullable();
    $table->string('instagram_url')->nullable();
    $table->string('pintrest_url')->nullable();
    $table->string('password');
    $table->boolean('isExpired')->default(false);
    $table->string('expire_date')->nullable();
    $table->integer('subcription_id')->default(0);
    $table->timestamps();
});



