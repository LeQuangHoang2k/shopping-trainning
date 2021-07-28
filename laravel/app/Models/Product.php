<?php

namespace App\Models;

use App\Casts\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // use HasFactory;

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
