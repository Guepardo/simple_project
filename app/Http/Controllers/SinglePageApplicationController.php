<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageApplicationController extends CrudController
{
    public function index(){
        return view('layouts.app'); 
    }
}
