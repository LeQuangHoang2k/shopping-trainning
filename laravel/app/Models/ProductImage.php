<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImages extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "product_option",
        "path",
        "created_at",
        "updated_at",
    ];

    public function products()
    {
        return $this->belongsTo(Products::class, 'product_id', "id");
    }

    public function options()
    {
        return $this->belongsTo(ProductOptions::class, 'product_option', "id");
    }
}
