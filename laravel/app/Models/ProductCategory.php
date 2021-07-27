<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "category_id",
    ];

    public function products()
    {
        return $this->belongsTo(Products::class, 'product_id', "id");
    }

    public function categories()
    {
        return $this->hasOne(Categories::class, 'category_id', "id");
    }
}
