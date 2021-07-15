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

    public function products()
    {
        return $this->belongsTo(Products::class, 'product_id', "id");
    }

    public function productOptions()
    {
        return $this->belongsTo(ProductOptions::class, 'option_id', "id");
    }

    public function orders()
    {
        return $this->belongsTo(Orders::class, 'order_id', "id");
    }
}
