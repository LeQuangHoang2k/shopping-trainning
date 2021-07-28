<?php

namespace App\Http\Controllers;

use App\Http\Requests\auth\RegisterRequest;
use App\Http\Resources\UsersResource;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function store(RegisterRequest $request)
    {
        $request->validated();

        $user = User::create($request->validated());

        return response()->json([
            "message" => "success",
            "users" => $user,
        ]);
    }
}

// Users::insert([
//     "email" => $request->email,
//     "password" => bcrypt($request->password),
// ]);
// $user = Users::create($input);
// return UsersResource::collection($this->usersRepository->get($request));