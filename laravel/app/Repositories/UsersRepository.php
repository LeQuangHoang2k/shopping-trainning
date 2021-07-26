<?php

namespace App\Repositories;

use App\Models\Users;

class UsersRepository
{
    public function get($filter)
    {
        $query = Users::select('*')->where('email', '=', $filter->email);

        return $query->get();
    }
}
