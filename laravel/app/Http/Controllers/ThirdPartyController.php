<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Services\ThirdParty;
use Illuminate\Http\Request;

class ThirdPartyController extends Controller
{
    public function loginFacebook(LoginFacebookRequest $request)
    {
        // Sync account
        $user = (new ThirdParty())->syncAccountFacebook();

        // gen access token
        //   $token = auth()->login($user);

        // return $this->respondWithToken($token);
    }
}
