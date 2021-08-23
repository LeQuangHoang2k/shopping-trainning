<?php

namespace App\Models\Product;

use App\Models\Order\OrderDetail;
use App\Models\ProductImage;
use App\Models\ProductOption;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        "id",
        "category_id",
        "name",
        "slug",
        'description',
        "price",
        "priority",
        "picture",
    ];

    public function options()
    {
        return $this->hasMany(ProductOption::class, 'product_id', "id");
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id', "id");
    }

    public function categories()
    {
        return $this->hasMany(ProductCategory::class, 'product_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'product_id', "id");
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
