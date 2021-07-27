<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "user_id",
        "created_at",
        "updated_at",
    ];

    public function users()
    {
        return $this->belongsTo(Users::class, 'user_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class, 'order_id', "id");
    }
}
