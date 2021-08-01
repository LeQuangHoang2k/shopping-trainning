<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Http\Requests\Auth\RegisterFacebookRequest;
use App\Services\ThirdParty;
use Illuminate\Http\Request;

class ThirdPartyController extends Controller
{
    public function registerFacebook(RegisterFacebookRequest $request)
    {
        // Sync account
        $credentials = $request->validated();
        // dd(111);

        (new ThirdParty())->syncAccountFacebook($credentials);

        // gen access token
        //   $token = auth()->login($user);

        // return $this->respondWithToken($token);
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
