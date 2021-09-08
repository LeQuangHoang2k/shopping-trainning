<?php

namespace App\Repositories;

use App\Models\Order\Order;

class OrderRepository
{
    public function getAll($user_id)
    {
        // dd($id);
        $order = Order::where("user_id",$user_id)->get();
        // dd($order);

        return $order;
    }

    public function find($id)
    {
    }

    public function create($filters)
    {
        return Order::create($filters);
    }
}
