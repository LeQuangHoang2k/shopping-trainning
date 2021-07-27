<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function get($filter)
    {
        $query = User::select('*')->where('email', '=', $filter->email);

        return $query->get();
    }
}
