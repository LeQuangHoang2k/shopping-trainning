<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "category",
        "name",
        "slug",
        'description',
        "price",
        "priority",
    ];

    public function option()
    {
        return $this->hasMany(ProductOption::class, 'product_id', "id");
    }

    public function image()
    {
        return $this->hasMany(ProductImage::class, 'product_id', "id");
    }

    public function categorie()
    {
        return $this->hasMany(ProductCategory::class, 'product_id', "id");
    }

    public function orderDetail()
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
