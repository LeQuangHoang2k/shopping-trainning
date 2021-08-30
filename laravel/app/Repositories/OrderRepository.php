<?php

namespace App\Repositories;

use App\Models\Order\Order;

class OrderRepository
{
    public $discountRepository;

    public function __construct(DiscountRepository $discountRepository = null)
    {
        $this->discountRepository = $discountRepository;
    }

    public function getAll()
    {
    }

    public function find($id)
    {
    }

    public function create($filters)
    {
        return Order::create($filters);
    }
}
