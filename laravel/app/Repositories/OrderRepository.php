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
        $order = Order::create($filters);

        $have_code = false;
        if (count($filters['record_code']) === 0) {
            $have_code = true;
        }

        return $order;
    }
}
