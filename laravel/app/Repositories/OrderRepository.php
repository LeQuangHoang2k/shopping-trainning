<?php

namespace App\Repositories;

use App\Models\Order\Order;

class OrderRepository
{
    public function getAll()
    {
        return [];
    }

    public function find($id)
    {
    }

    public function create($filters)
    {
        return Order::create($filters);
    }
}
