<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Http\Requests\Auth\RegisterFacebookRequest;
use App\Http\Requests\Auth\RegisterGoogleRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\ThirdParty;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        //check xem có ai trùng email với fb mình ko
        $userDB =  $this->findFacebook($credentials);
        if (!$userDB) {
            $user = User::create($credentials);
            return $this->respondWithToken($this->generateToken($user), $user);
        }

        $user = $this->handleAnswer($credentials, $userDB);
        if (!$user) return response()->json(["message_duplicate" => "email này đã được đăng kí, đây có phải bạn ko ?."]);

        return $this->respondWithToken($this->generateToken($user), $user);
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

    public function registerGoogle(RegisterGoogleRequest $request)
    {
        $credentials = $request->validated();
        $user = null;

        //check xem có ai trùng email với fb mình ko
        $userDB =  $this->findGoogle($credentials);
        if (!$userDB) {
            $user = User::create($credentials);
            return $this->respondWithToken($this->generateToken($user), $user);
        }

        $user = $this->handleAnswer($credentials, $userDB);
        if (!$user) return response()->json(["message_duplicate" => "email này đã được đăng kí, đây có phải bạn ko ?."]);

        return $this->respondWithToken($this->generateToken($user), $user);
    }

    public function loginGoogle(LoginGoogleRequest $request)
    {
        // Sync account
        $credentials = $request->validated();
        $user = User::where('google_id', $credentials['google_id'])->first();

        if (!$token = JWTAuth::fromUser($user)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $user);
    }



    public function handleAnswer($credentials, $userDB)
    {
        //not answer
        if (!isset($credentials['is_duplicate'])) {
            return null;
        }

        //handle answer
        if ($credentials['is_duplicate']) {
            if (isset($credentials['facebook_id'])) {
                $user = $this->updateFacebook($credentials, $userDB);
            } elseif (isset($credentials['google_id'])) {
                $user = $this->updateGoogle($credentials, $userDB);
            } else {
                $user = null;
            }
        } else {
            $user = User::create($credentials);
        }

        return $user;
    }

    public function findFacebook($credentials)
    {
        $user = User::where([
            'email' => $credentials['email'],
            "facebook_id" => null
        ])->first();

        return $user;
    }

    public function findGoogle($credentials)
    {
        $user = User::where([
            'email' => $credentials['email'],
            "google_id" => null
        ])->first();

        return $user;
    }

    public function updateFacebook($credentials, $userDB)
    {
        $newName = $userDB->name;
        $newPicture = $userDB->picture;

        if ($newName === null) $newName = $credentials['name'];
        if ($newPicture === null) $newPicture = $credentials['picture'];

        $user = tap(User::where('id', $userDB->id))
            ->update([
                'facebook_id' => $credentials['facebook_id'],
                'name' => $newName,
                'picture' => $newPicture
            ])
            ->first();

        return $user;
    }

    public function updateGoogle($credentials, $userDB)
    {
        $newName = $userDB->name;
        $newPicture = $userDB->picture;

        if ($newName === null) $newName = $credentials['name'];
        if ($newPicture === null) $newPicture = $credentials['picture'];

        $user = tap(User::where('id', $userDB->id))
            ->update([
                'google_id' => $credentials['google_id'],
                'name' => $newName,
                'picture' => $newPicture
            ])
            ->first();

        return $user;
    }

    public function generateToken($user)
    {
        if (!$token = JWTAuth::fromUser($user)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $token;
    }

    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60 * 24 * 7,
            'user' => $user,
        ]);
    }
}

// $now = Carbon::now('Asia/Ho_Chi_Minh');