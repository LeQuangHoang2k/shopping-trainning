<?php

namespace App\Models;

use App\Models\Order\OrderDetail;
use App\Models\Product\Product;
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

    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id', "id");
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class, 'product_option_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'product_option_id', "id");
    }
}
