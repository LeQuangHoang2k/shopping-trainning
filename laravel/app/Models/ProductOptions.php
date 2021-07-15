<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOptions extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "name",
        'value',
        "price",
        "created_at",
        "updated_at",
    ];
}
