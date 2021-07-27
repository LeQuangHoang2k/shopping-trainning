<?php

namespace App\Http\Controllers;

use App\Http\Requests\auth\RegisterRequest;
use App\Http\Resources\UsersResource;
use App\Models\Users;
use App\Repositories\UsersRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public $usersRepository;

    public function __construct(UsersRepository $usersRepository)
    {
        $this->usersRepository = $usersRepository;
    }

    public function store(RegisterRequest $request)
    {
        // dd("register");
        $request->validated();

        // $user = Users::create($request->all())->save();
        $user = Users::create([
            "email" => $request->email,
            "phone" => $request->phone,
            "password" => bcrypt($request->password),
        ])->save();

        // return response()->json([
        //     "message" => "success",
        //     "users" => $user,
        // ]);
    }
}

// Users::insert([
//     "email" => $request->email,
//     "password" => bcrypt($request->password),
// ]);
// $user = Users::create($input);
// return UsersResource::collection($this->usersRepository->get($request));