<?php

namespace App\Repositories;

use App\Models\Order;
use App\Models\Product;

class OrderRepository
{
    public function getAll()
    {
    }

    public function find($id)
    {
    }

    public function create($filters)
    {
        print_r($filters['total_price']);
        return Order::create($filters);
    }
}
