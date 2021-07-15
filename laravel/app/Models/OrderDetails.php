<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "order_id",
        "product_id",
        'amount',
        "option_id",
        "price_per_unit",
        "created_at",
        "updated_at",
    ];
}
