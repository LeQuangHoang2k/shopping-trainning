<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOptions extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "name",
        'value',
        "price",
        "created_at",
        "updated_at",
    ];

    public function products()
    {
        return $this->belongsTo(Products::class, 'product_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class, 'product_id', "id");
    }
}
