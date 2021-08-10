<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\auth\RegisterRequest;
use App\Http\Resources\UsersResource;
use App\Models\User\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function store(RegisterRequest $request)
    {
        $credentials = $request->validated();
        $user = null;

        //check xem có ai trùng email với fb mình ko
        $userDB =  $this->find($credentials);
        if (!$userDB) {
            $user = User::create($credentials);
            return [
                "message" => "Đã tạo thành công",
                "user" => $user
            ];
        }

        $user = $this->handleAnswer($credentials, $userDB);
        if (!$user) return response()->json(["message_duplicate" => "email này đã được đăng kí, đây có phải bạn ko ?."]);

        return [
            "message" => "thành công",
            "user" => $user
        ];
    }

    public function find($credentials)
    {
        $user = User::where([
            'email' => $credentials['email'],
            "password" => null
        ])->first();

        return $user;
    }

    public function handleAnswer($credentials, $userDB)
    {
        //not answer
        if (!isset($credentials['is_duplicate'])) {
            return null;
        }

        //handle answer
        if ($credentials['is_duplicate']) {
            $user = $this->updateUser($credentials, $userDB);
        } else {
            $user = User::create($credentials);
        }

        return $user;
    }

    public function updateUser($credentials, $userDB)
    {
        $newName = $userDB->name;
        $newPicture = $userDB->picture;

        if ($newName === null) $newName = $credentials['name'];
        if ($newPicture === null) $newPicture = $credentials['picture'];

        $user = tap(User::where('id', $userDB->id))
            ->update([
                'password' => Hash::make($credentials['password']),
                'name' => $newName,
                'picture' => $newPicture,
                'phone' => $credentials['phone']
            ])
            ->first();

        return $user;
    }
}

// Users::insert([
//     "email" => $request->email,
//     "password" => bcrypt($request->password),
// ]);
// $user = Users::create($input);
// return UsersResource::collection($this->usersRepository->get($request));