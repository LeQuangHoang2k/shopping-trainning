<?php

namespace App\Repositories;

use App\Models\Discount\Discount;

class DiscountRepository
{
    public function get($filters)
    {
        $query  = Discount::select("*")->where('code', $filters['code'])->get();

        // dd($query);

        return $query;
    }

    public function test()
    {
        // dd(1243);
        return Discount::select("*")->get();
    }
}
