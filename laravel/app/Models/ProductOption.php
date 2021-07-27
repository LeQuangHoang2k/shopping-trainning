<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "name",
        'value',
        "price",
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', "id");
    }

    public function productImage()
    {
        return $this->hasMany(ProductImage::class, 'product_option_id', "id");
    }

    public function orderDetail()
    {
        return $this->hasMany(OrderDetail::class, 'product_option_id', "id");
    }
}
