<?php

namespace App\Repositories;

use App\Models\Products;

class ProductsRepository
{
    public function getAll()
    {
        // print_r("get all");

        $query = Products::select("*");

        return $query->get();
    }

    public function find($id)
    {
    }
}
