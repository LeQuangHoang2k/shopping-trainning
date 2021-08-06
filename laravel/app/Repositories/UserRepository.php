<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    public function find($filters)
    {
        $user =  User::where('email', $filters)->whereNotNull('password')->first();

        $check = Hash::check($filters['password'], $user->password);
        if (!$check) return null;

        return $user;
    }

    public function findListEmail($filter)
    {
        // dd($filter['email']);
        $query = User::select('*')->where('email', $filter['email']);

        return $query->get();
    }

    public function create($filter)
    {
        // dd($filter['email']);
        return User::create($filter);
    }

    public function test($filter)
    {
        $query = User::select('*')->where('email', '=', $filter->email);

        return $query->get();
    }
}

// $user =  User::where('email', $filters)->first();