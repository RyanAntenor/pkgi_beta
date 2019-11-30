<?php

namespace Models;
\App\DB::connect();
use Illuminate\Database\Eloquent\Model;


class Settings extends Model
{
    /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = 'settings';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        
    ];

    protected $hidden = [
        
    ];

    
}