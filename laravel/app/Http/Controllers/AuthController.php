<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepository;
use Illuminate\Support\Carbon;

class AuthController extends Controller
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

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $credentials);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        // auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    // public function refresh()
    // {
    //     return $this->respondWithToken(auth()->refresh(), "abc");
    // }

    protected function respondWithToken($token, $credentials)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Carbon::now()->format('d-m-Y H:i:s'),
            // 'user' => new UserResource($this->userRepository->find($credentials)),
            // 'expires_in' =>  Carbon::today()->toDateTimeString(),
            // 'expires_in' =>Carbon::now()->second,
            // 'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }
}
