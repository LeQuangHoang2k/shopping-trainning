<?php

namespace App\Services;

use App\Models\User;

class ThirdParty
{
    public function syncAccountFacebook($credentials)
    {
        // dd("syncAccountFacebook");
        $userDB =  User::where('email', $credentials['email'])->first();
        $user = null;
        // dd($user);

        if (!$userDB) {
            //!exist => create
            // dd($user);
            $user = User::create($credentials);
        }

        if ($credentials["is_duplicate"]) {
            //exist && different user => create 
            dd($userDB);
        } else {
            //exist && same user => update 
            dd($userDB);
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
