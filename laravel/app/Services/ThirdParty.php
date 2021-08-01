<?php

namespace App\Services;

use App\Models\User;

class ThirdParty
{
    public function syncAccountFacebook($credentials)
    {
        dd("syncAccountFacebook");
        
        //!exist => create
        
        // $user = User::create($credentials);

        //exist && different user => create 
        
        //exist && same user => update 

        //get user

        $user = "";

        return $user;
    }

    public function syncAccountGoogle()
    {
        dd("syncAccountGoogle");
    }
}
