<?php

namespace App\Repositories;

use App\Models\Discount\Discount;

class DiscountRepository
{
    public function test()
    {
        // dd(1243);
        return Discount::select("*")->get();
    }
}
