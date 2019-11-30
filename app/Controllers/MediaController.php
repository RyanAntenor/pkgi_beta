<?php
namespace App\Controllers;

use Models\Photo;

class MediaController 
{
    public function index() {


        $photos = Photo::where('user_id', 1)->get();
        \response()->json($photos);



        // Code for reading files
        // try {
        //     $files = array_slice(scandir( user_media_folder() ), 2);
        //     $images = [];
        
        //     foreach( $files as $file) {
        //         array_push($images, ['filename' => user_media_folder_public() . $file ]);
        //     }
    
        //     \response()->json($images);

        // } catch (Exception $e) {
        //     \response()->json([]);
        // }
       
    }
}
    