<?php

namespace App\Repositories;

use App\Models\Discount\Discount;

class DiscountRepository
{
    public function get($filters)
    {
        $query  = Discount::select("*")->where('code', $filters['code'])->get();

        if (count($query) === 0) return ['error' => 'This code is not exist', 'data' => []];
        if ($query[0]->is_used) return ['error' => 'This code is already in use', 'data' => []];
        if (strtotime("now") > strtotime($query[0]->expired_at)) return ['error' => 'This code has expired ', 'data' => []];

        return $query;
    }

    public function updateUsedCode($filters)
    {
        $code_used = tap(Discount::where('id', $filters['record_code']['id']))
            ->update([
                'is_used' => true,
            ])
            ->first();

        return $code_used;
    }

    public function test()
    {
        // dd(1243);
        return Discount::select("*")->get();
    }
}
