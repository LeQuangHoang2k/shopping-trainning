<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "name",
        "created_at",
        "updated_at",
    ];

    public function productCategories()
    {
        return $this->hasOne(productCategories::class, 'category_id', "id");
    }
}
