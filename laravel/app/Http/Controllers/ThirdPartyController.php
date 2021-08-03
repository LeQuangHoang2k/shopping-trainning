<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Http\Requests\Auth\RegisterFacebookRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\ThirdParty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

use function PHPUnit\Framework\isNull;

class ThirdPartyController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function registerFacebook(RegisterFacebookRequest $request)
    {
        $credentials = $request->validated();
        $user = null;
        $userDB =  User::where('email', $credentials['email'])->first();

        //check xem email này có phải mình ko
        if (!$userDB) {
            //create
            $user = User::create($credentials);

            return response()->json([
                "message" => "success",
                "user" => $user,
            ]);
        }

        if (!isset($credentials['is_duplicate'])) {
            return response()->json(["message_duplicate" => "email này đã được đăng kí, đây có phải bạn ko ?."]);
        }

        $newName = $userDB->name;
        $newPicture = $userDB->picture;

        //handle answer
        if ($credentials['is_duplicate']) {
            if (!isNull($newName) && !isNull($newPicture)) return $user;
            if (isNull($newName)) $newName = $credentials['name'];
            if (isNull($newPicture)) $newPicture = $credentials['picture'];

            // return response([
            //     "answer" => $credentials['is_duplicate']
            // ]);

            $user = User::where([
                ['facebook_id', null],
                [
                    'email', $credentials['email'],
                ]
            ])->update(
                [
                    'facebook_id' => $credentials['facebook_id'],
                    'name' => $newName,
                    'picture' => $newPicture
                ]
            );
        } else {
            // return response([
            //     "answer" => $credentials['is_duplicate']
            // ]);

            $user = User::create($credentials);
        }

        return response([
            "answer" => $credentials['is_duplicate'],
            "user" => $user,
        ]);
    }

    public function loginFacebook(LoginFacebookRequest $request)
    {
        // Sync account
        // (new ThirdParty())->syncAccountFacebook($credentials);
        $credentials = $request->validated();
        $user = User::where('facebook_id', $credentials['facebook_id'])->first();

        if (!$token = JWTAuth::fromUser($user)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $user);
    }

    public function loginGoogle(LoginGoogleRequest $request)
    {
        // Sync account
        dd(222);
    }

    protected function respondWithToken($token, $user)
    {
        $now = Carbon::now('Asia/Ho_Chi_Minh');

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60 * 24 * 7,
            'user' => $user,
        ]);
    }
}
