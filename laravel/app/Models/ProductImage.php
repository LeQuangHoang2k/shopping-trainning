<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "product_option_id",
        "path",
    ];

    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id', "id");
    }

    public function options()
    {
        return $this->belongsTo(ProductOption::class, 'product_option_id', "id");
    }
}
