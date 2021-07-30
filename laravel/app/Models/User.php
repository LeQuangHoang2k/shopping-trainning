<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    // use HasFactory;
    use Notifiable;

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
