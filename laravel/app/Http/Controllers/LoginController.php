<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        // dd("login");

        // if (!$token = auth()->attempt($credentials)) {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }

        // if (isset($request->token) && !$this->verifyToken($request)) return;
        $request->validated();

        //generate token
        $token = auth('api')->attempt($request->all());

        return response()->json([
            "access_token" => $token,
            "user" => new UserResource($this->userRepository->find($request->validated())),
        ]);



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