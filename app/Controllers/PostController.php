<?php
namespace App\Controllers;

use Pecee\Http\Request;
use Models\Post;


function fetchJson() {
    
    $data = json_decode(file_get_contents('php://input'), true);

    // $title = input()->get('title');
    // $body  = input()->get('body');
    // $code_title =  base64_encode( $data['title'] .'hello' );
    // $code_body =  base64_encode( $data['body'] );

    // return $params;

    // $data['title'] = "whatever";
    header('Content-Type: application/json');
    return json_encode($data);

}

class PostController 
{
    public function index() {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function create() {
        return view('posts/create');
    }

    public function get($id) {
        $post = Post::find($id);

        if( isset($post) ) {
            return response()->json($post);
        } else {
            return response()->json([]);
        }

    }

    public function store() {
    }
}
    