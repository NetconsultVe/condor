<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class comunidadController extends Controller
{
    public function index(){
        return view('comunidad.index');
    }
}
