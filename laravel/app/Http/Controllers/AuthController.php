<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validated = $request->validated();
        print_r($request->validated());
    }

    public function test(Request $request)
    {
        print_r("test");
    }

    // public function createNewToken($token)
    // {
    //     return response()->json([
    //         "access_token" => $token,
    //         "token_type" => "bearer",
    //     ]);
    // }
}
