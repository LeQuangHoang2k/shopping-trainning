<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        print_r("abc");

        // $validated = $request->validated();
        // if ($validated->fails()) {
        //     return;
        // }

        // $credentials = $request(["email", "password"]);
        // if (!$token = auth()->attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }

        
        // return $this->respondWithToken($token);
    }
}

// return response()->json([
//     'access_token' => 'accesstoken',
//     'expired_time' => 123970,
//     'fresh_token' => 'asd'
// ]);