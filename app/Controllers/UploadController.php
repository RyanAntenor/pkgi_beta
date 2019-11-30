<?php
namespace App\Controllers;

use Models\Photo;

class UploadController 
{
    public function index() {
        return "api";
    }

    public function store() {
        $category_id = input()->get('category_id');
        $title = input()->get('title');


        $path_files = [];
        foreach(input()->file('file') as $image)
        {
            // $destinationFilename = sprintf('%s.%s', uniqid(), $image->getMime() );

            if( preg_match('/image\/(jpe?g|png|svg)/', $image->getMime())) 
            {
                $destinationFilename = sprintf('%s.%s', uniqid(), $image->getExtension());
                // $image->move(sprintf( UPLOAD_DIR . '/%s', $destinationFilename));

                $upload_path = sprintf( user_media_folder() . '/%s', $destinationFilename);
                $image->move( $upload_path );

                Photo::create([
                    'filepath' => '/' . getenv('PUBLIC_PATH_FILES') . '/' .  $_SESSION['profile']['account_id'] . '/' .$destinationFilename, 
                    'user_id' => $_SESSION['profile']['id'],
                    'category_id' => 1,
                    'title' => $title
                ]);

                array_push( $path_files, [ "filename" =>  PUBLIC_PATH_FILES .'/' . $destinationFilename ]);
            }
        }

        response()->json($path_files);
    }

    public function single(){}

    public function all() {
        $files = array_slice(scandir(UPLOAD_DIR), 2);
        \response()->json($files);
    }

}
    