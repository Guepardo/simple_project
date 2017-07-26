<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Enums\SystemStatusTypes;
use App\System;

class SystemController extends CrudController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return parent::paginate(System::class, $request->input('query'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $args = $request->all(); 
        $args['status'] = SystemStatusTypes::ACTIVE;
        return parent::save(System::class, $args);
    }
}
