<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class System extends Model
{
    use SearchableTrait;

    protected $fillable = [
        'description',
        'initials',
        'url',
        'attendance_email',
        'status'
    ]; 

    protected $searchable = [
        'columns' => [
            'initials' => 10,
            'attendance_email' => 10,
            'description' => 10
        ]
    ];
}
