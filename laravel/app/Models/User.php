<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "facebook_id",
        "google_id",
        'name',
        "phone",
        "picture",
        'email',
        'password',
        "role",
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class, 'user_id', 'id');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
