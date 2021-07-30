<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        // dd("login");

        // $credentials = $request(["email", "password"]);
        // if (!$token = auth()->attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }

        // if (isset($request->token) && !$this->verifyToken($request)) return;
        $request->validated();
        $users =  User::where('email', $request->validated())->first();
        dd($users->email);
        // print_r($user->email);
        // $credentials = $request($request->all());
        // if (!$token = auth()->attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }


        // return $this->respondWithToken($token);
    }

    public function verifyToken($request)
    {
        return true;
    }
}

// return response()->json([
//     'access_token' => 'accesstoken',
//     'expired_time' => 123970,
//     'fresh_token' => 'asd'
// ]);