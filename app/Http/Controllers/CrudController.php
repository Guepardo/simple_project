<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class CrudController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const ELEMENTS_PER_PAGE = 5; 

    protected function save($model, $args) {
        $object = $model::create($args);
        $success = $object->save(); 
        return [ 'success' => $success, 'object' => $object ];
    }

    protected function paginate($model, $query) {
        return $model::search($query)
            ->paginate(self::ELEMENTS_PER_PAGE);
    }
}
