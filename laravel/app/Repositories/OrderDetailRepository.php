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

    public function create($filters, $order)
    {
        $orderDetails = [];
        foreach ($filters['orderList'] as $item) {
            $orderDetail = OrderDetail::create([
                "order_id" => $order->id,
                "product_id" => $item['item']['product_id'],
                "amount" => $item['item']['count'],
                "product_option_id" => $item['item']['option_id'],
                "price_per_unit" => $item['item']['price'],
            ]);

            array_push($orderDetails, $orderDetail);
        }

        return $orderDetails;
    }
}
