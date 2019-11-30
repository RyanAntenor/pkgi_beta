<?php

namespace Models;

\App\DB::connect();

use Illuminate\Database\Eloquent\Model;


class Post extends Model

{
   /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = "posts";
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
   protected $fillable = [
       'title', 'body', 'created_by'
   ];

    protected $hidden = [
        'password', 'remember_token', 'created_by'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
 }