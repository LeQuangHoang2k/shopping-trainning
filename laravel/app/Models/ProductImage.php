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

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', "id");
    }

    public function option()
    {
        return $this->belongsTo(ProductOption::class, 'product_option_id', "id");
    }
}
