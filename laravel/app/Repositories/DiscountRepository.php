<?php

namespace App\Repositories;

use App\Models\Discount\Discount;

class DiscountRepository
{
    public function get($filters)
    {
        $query  = Discount::select("*")->where('code', $filters['code'])->get();
        // $query  = Discount::select("*")->where('code', 's')->get();


        // dd(count($query));
        if (count($query) === 0) return ['error' => 'This code is not exist', 'data' => []];
        if ($query[0]->is_used) return ['error' => 'This code is already in use', 'data' => []];
        // if ($query[0]->is_expired) return ['error' => 'This code is not exist', 'data' => $query];


        return $query;
    }

    public function test()
    {
        // dd(1243);
        return Discount::select("*")->get();
    }
}
