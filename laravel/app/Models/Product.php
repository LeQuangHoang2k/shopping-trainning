<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "category",
        "name",
        "slug",
        'description',
        "price",
        "priority",
        "created_at",
        "updated_at",
    ];

    public function options()
    {
        return $this->hasMany(ProductOptions::class, 'product_id', "id");
    }

    public function images()
    {
        return $this->hasMany(ProductImages::class, 'product_id', "id");
    }

    public function categories()
    {
        return $this->hasMany(ProductCategories::class, 'product_id', "id");
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class, 'product_id', "id");
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
