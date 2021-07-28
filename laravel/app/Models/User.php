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
        'email',
        'name',
        "phone",
        "picture",
        'password',
        "address",
        "role",
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class, 'user_id', 'id');
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
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
