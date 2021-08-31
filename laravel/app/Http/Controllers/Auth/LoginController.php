<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('auth:api', ['except' => ['login', 'loginFacebook', 'loginGoogle']]);
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!$token = JWTAuth::attempt($credentials, ['exp' => Carbon::now()->addDays(7)->timestamp])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $credentials);
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
}

// return response()->json([
//     'access_token' => 'accesstoken',
//     'expired_time' => 123970,
//     'fresh_token' => 'asd'
// ]);

// $user = JWTAuth::parseToken()->authenticate();
// JWTAuth::invalidate($request->token);
