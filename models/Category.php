<?php

namespace Models;
\App\DB::connect();
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = 'categories';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        // 'name', 'permalink'
    ];

    protected $hidden = [
        
    ];

     public function users()
     {
         return $this->belongsToMany('Models\User', 'category_user_table', 'user_id', 'category_id');
     }

    
}