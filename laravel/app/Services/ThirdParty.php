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

        if ($userDB) {
            // dd($credentials);
            if (!isset($credentials["is_duplicate"]))
                return print_r(json_encode(["error" => "Unconfirmed duplicate !"]));

            if ($credentials["is_duplicate"]) {
                dd("update");
            } else {
                dd("create");
            }
        } else {
            $user = User::create($credentials);
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

//!exist => create
// dd($user);
//exist && different user => create 
//exist && same user => update 
