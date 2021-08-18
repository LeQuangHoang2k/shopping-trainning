<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "user_id",
        "address",
        "phone",
        "discount_id",
        "tax",
        "total_price"
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', "id");
    }
}
