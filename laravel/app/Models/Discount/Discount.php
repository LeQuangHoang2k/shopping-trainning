<?php

namespace App\Models\Discount;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    public $fillable = [
        "id",
        "product_id",
        "code",
        "rate",
        "active",
        "expired_at"
    ];

    public function product()
    {
        return $this->hasOne(Product::class, 'product_id', 'id');
    }
}
