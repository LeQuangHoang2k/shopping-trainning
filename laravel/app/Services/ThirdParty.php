<?php

namespace App\Services;

class ThirdParty
{
    public function syncAccountFacebook()
    {
        dd("syncAccountFacebook");
        
        //!exist => create
        
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
