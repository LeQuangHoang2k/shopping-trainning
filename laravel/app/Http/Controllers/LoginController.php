<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;

// use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function login(LoginRequest $request)
    {
        # code...
        print_r($request);
        return view('welcome');
    }
}
