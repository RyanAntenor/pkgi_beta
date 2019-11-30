<?php

namespace Models;
\App\DB::connect();
use Illuminate\Database\Eloquent\Model;


class Photo extends Model
{
    /**
    * The database table used by the model.
    *
    * @var string
    */
    protected $table = 'photos';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [

    ];

    protected $hidden = [
        
    ];

    public function category() {
        return $this->belongsTo('\Models\Category');
        // return "this is a category";
    }

    public function user()
    {
        return $this->belongsTo('\Models\User');
    }

    
}