<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function find($filters)
    {
        $user =  User::where('email', $filters)->first();

        return $user;
    }

    public function test($filter)
    {
        $query = User::select('*')->where('email', '=', $filter->email);

        return $query->get();
    }
}
