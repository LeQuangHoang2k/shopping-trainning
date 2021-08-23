<?php

namespace App\Repositories;

use App\Models\Order\OrderDetail;

class CategoryRepository
{
    public function getAll()
    {
        print_r("get all");
    }

    public function find($id)
    {
        print_r("find");
    }

    public function create($filters)
    {
        print_r("filters");
    }
}
