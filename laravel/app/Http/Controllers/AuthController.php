<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;
use App\Http\Requests\LoginFacebookRequest;
use App\Http\Requests\LoginGoogleRequest;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepository;
use Illuminate\Support\Carbon;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
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
        if (!$token = JWTAuth::attempt($credentials)) {
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

    public function logout(LogoutRequest $request)
    {
        $credentials = $request->validated();

        JWTAuth::invalidate($credentials['token']);

        return response()->json([
            'success' => true,
            'message' => 'User logged out successfully'
        ]);
    }
}

// 'expires_in' => $now->addDays(7)->format('d-m-Y H:i:s'),
// 'expires_in' => Carbon::now()->format('d-m-Y H:i:s'),
// 'expires_in' =>  Carbon::today()->toDateTimeString(),
// 'expires_in' =>Carbon::now()->second,
// 'expires_in' => auth()->factory()->getTTL() * 60,

// dd($request["token"]);
// dd(JWTAuth::invalidate($request["token"]));
// dd(JWTAuth::parseToken()->authenticate($request["token"]));
// $user = JWTAuth::invalidate($request["token"]);
// dd($user);