<?php

namespace App\Services;

use App\Models\User;

use function PHPUnit\Framework\isNull;

class ThirdParty
{
    public function syncAccountFacebook($credentials)
    {
        // dd("syncAccountFacebook");

        $userDB =  User::where('email', $credentials['email'])->first();
        $newName = $userDB->name;
        $newPicture = $userDB->picture;
        $user = null;

        if ($userDB) {
            // dd($credentials);
            if (!isset($credentials["is_duplicate"]))
                return print_r(json_encode(["error" => "Unconfirmed duplicate !"]));

            if ($credentials["is_duplicate"]) {

                if (!isNull($newName) && !isNull($newPicture)) return $user;
                if (isNull($newName)) $newName = $credentials['name'];
                if (isNull($newPicture)) $newPicture = $credentials['picture'];

                $user = User::where('email', $credentials['email'])->update(['name' => $newName, 'picture' => $newPicture]);
            } else {
                // dd("create");
                $user = User::create($credentials);
            }
        } else {
            $user = User::create($credentials);
        }

        dd("pass");

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
