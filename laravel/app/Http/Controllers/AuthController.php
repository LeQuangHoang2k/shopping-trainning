<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => [
                    // 'message' => $validator->errors()->first()
                    'message' => $validator->errors()->toArray()
                ]
            ], 400);
        }

        dd("thành công");
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
