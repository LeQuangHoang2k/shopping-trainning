<?php

namespace App\Repositories;

use App\Models\Products;

class ProductsRepository
{
    public function getAll()
    {
        // print_r("get all");

        $query = Products::select("*");

        return $query->paginate(15);
    }

    public function find($id)
    {
    }
}
