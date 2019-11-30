<?php

namespace Models;
\App\DB::connect();
use Illuminate\Database\Eloquent\Model;


class Booking extends Model
{
    /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = 'booking';
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