<?php

namespace Models;

use Models\Category;

\App\DB::connect();

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
   /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = "users";
   /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'username', 
        'email',
        'firstname',
        'lastname',
        'account_id',
        'is_active',
        'last_logged_in',
        'confirmation_id',
        'confirmed',
        'password',
        'description'
    ];
   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
    protected $hidden = [
        'password', 
        'remember_token', 
        'created_at', 
        'updated_at',
        'last_logged_in',
        'is_logged', 
        'is_active', 
        'confirmed'
    ];
   /*
    * Get Todo of User
    *
    */
    public function posts()
    {
        return $this->hasMany(Post::class, 'created_by');
    }

    public function categories()
    {
        return $this->belongsToMany('Models\Category', 'category_user', 'user_id', 'category_id');
    }
}