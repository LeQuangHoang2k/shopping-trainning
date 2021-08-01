<?php

namespace App\Services;

use App\Models\User;

class ThirdParty
{
    public function syncAccountFacebook($credentials)
    {
        // dd("syncAccountFacebook");
        $user =  User::where('email', $credentials['email'])->first();
        // dd($user);

        if (!$user) {
            //!exist => create
            // dd($user);
            $user = User::create($credentials);
        } else if ($user) {
            //exist && different user => create 
            dd($user);
        } else {
            //exist && same user => update 
            dd($user);
        }


        //get user

        // $user = "";

        return $user;
    }

    public function syncAccountGoogle()
    {
        dd("syncAccountGoogle");
    }
}
