<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\LoginFacebookRequest;
use App\Http\Requests\LoginGoogleRequest;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('auth:api', ['except' => ['login']]);
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $token = $this->generateToken($credentials);
        return $this->respondWithToken($token, $credentials);
    }

    public function loginFacebook(LoginFacebookRequest $request)
    {
        $credentials = $request->validated();
        //sync fb
        $token = $this->generateToken($credentials);
        return $this->respondWithToken($token, $credentials);
    }

    public function loginGoogle(LoginGoogleRequest $request)
    {
        $credentials = $request->validated();
        //sync fb
        $token = $this->generateToken($credentials);
        return $this->respondWithToken($token, $credentials);
    }

    public function generateToken($credentials)
    {
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $token;
    }

    protected function respondWithToken($token, $credentials)
    {
        $now = Carbon::now('Asia/Ho_Chi_Minh');
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60 * 24 * 7,
            'user' => new UserResource($this->userRepository->find($credentials)),
        ]);
    }

    public function verifyToken()
    {
        $user = JWTAuth::parseToken()->authenticate();
        dd($user);
    }
}

// return response()->json([
//     'access_token' => 'accesstoken',
//     'expired_time' => 123970,
//     'fresh_token' => 'asd'
// ]);