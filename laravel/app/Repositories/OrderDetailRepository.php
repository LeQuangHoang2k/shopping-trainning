<?php

namespace App\Repositories;

use App\Models\Order\OrderDetail;

class OrderDetailRepository
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
        // print_r("filters");
        return  "1234";
    }
}
