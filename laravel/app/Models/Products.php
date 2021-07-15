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
        'description',
        "price",
        "priority",
        "created_at",
        "updated_at",
    ];
}
