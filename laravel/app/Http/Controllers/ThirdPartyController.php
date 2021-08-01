<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Http\Requests\Auth\RegisterFacebookRequest;
use App\Models\User;
use App\Services\ThirdParty;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

class ThirdPartyController extends Controller
{
    public function registerFacebook(RegisterFacebookRequest $request)
    {
        $credentials = $request->validated();
        $user = null;
        $userDB =  User::where('email', $credentials['email'])->first();
        $newName = $userDB->name;
        $newPicture = $userDB->picture;

        //check xem email này có phải mình ko
        if (!$userDB) {
            //create
            $user = User::create($credentials);
        } else {
            // thông báo email này đã tồn tại
            if (!isset($credentials['is_duplicate'])) {
                return response()->json(["message_duplicate" => "email này đã được đăng kí, đây có phải bạn ko ?."]);
            }

            // client trả lời có
            if ($credentials['is_duplicate']) {
                // dd("update");
                if (!isNull($newName) && !isNull($newPicture)) return $user;
                if (isNull($newName)) $newName = $credentials['name'];
                if (isNull($newPicture)) $newPicture = $credentials['picture'];

                $user = User::where('email', $credentials['email'])->update(['name' => $newName, 'picture' => $newPicture]);
            } else {
                // dd("create");
                $user = User::create($credentials);
            }
        }

        return response()->json([
            "message" => "success",
            "users" => $user,
        ]);
    }

    public function loginFacebook(LoginFacebookRequest $request)
    {
        // Sync account
        $credentials = $request->validated();
        // dd(111);

        (new ThirdParty())->syncAccountFacebook($credentials);

        // gen access token
        //   $token = auth()->login($user);

        // return $this->respondWithToken($token);
    }

    public function loginGoogle(LoginGoogleRequest $request)
    {
        // Sync account
        dd(222);
    }
}
