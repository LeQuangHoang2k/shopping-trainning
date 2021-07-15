<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productImages extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "product_id",
        "path",
        "created_at",
        "updated_at",
    ];
}
