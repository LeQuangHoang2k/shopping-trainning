<?php

namespace App\Models\Order;

use App\Models\Order;
use App\Models\Product\Product;
use App\Models\ProductOption;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [
        "id",
        "order_id",
        "product_id",
        'amount',
        "product_option_id",
        "price_per_unit",
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'id', "product_id");
    }

    public function productOptions()
    {
        return $this->belongsTo(ProductOption::class, 'product_option_id', "id");
    }

    public function orders()
    {
        return $this->belongsTo(Order::class, 'order_id', "id");
    }
}
