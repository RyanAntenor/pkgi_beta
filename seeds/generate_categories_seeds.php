<?php

use Models\Category;

$types = [
// 'Uncategorized',
'Pop Noir',
'Black and White',
'California Dreaming',
'Street Photography',
'Avant Garde',
'Abstract',
'Architecture',
'Interior',
'Newborn',
'Wedding Vibes',
'Food Photography',
'Fashion Photography',
'Editorial',
'Negative Space',
'Still Life',
'Spontaneous',
'Documentary',
'Emotions',
'Eclectic',
'Art Nouveau',
'Pure',
'Retro',
'Urban Decay',
'Candid',
'Colour',
'Infra Red',
'Ocean',
'Snapshot',
'Adventure',
'Portrait'
];


foreach ($types as $type) {
    Category::create([
        'name' => $type,
        'permalink' => ( str_replace(' ', '-', strtolower($type)) )
    ]);
}
