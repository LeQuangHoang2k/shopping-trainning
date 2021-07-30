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
        if ($this->verifyToken()) {
            # code...
        }

        $credentials = $request->validated();

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $credentials);
    }

    public function verifyToken()
    {
        return true;
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

// 'expires_in' => $now->addDays(7)->format('d-m-Y H:i:s'),
// 'expires_in' => Carbon::now()->format('d-m-Y H:i:s'),
// 'expires_in' =>  Carbon::today()->toDateTimeString(),
// 'expires_in' =>Carbon::now()->second,
// 'expires_in' => auth()->factory()->getTTL() * 60,