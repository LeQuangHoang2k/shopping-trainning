<?php

namespace App\Repositories;

use App\Models\Discount\Discount;

class DiscountRepository
{
    public function getByCode($filters)
    {
        $query  = Discount::select("*")->where('code', $filters['code'])->get();

        if (count($query) === 0) return ['error' => 'This code is not exist', 'data' => []];
        if ($query[0]->is_used) return ['error' => 'This code is already in use', 'data' => []];
        if (strtotime("now") > strtotime($query[0]->expired_at)) return ['error' => 'This code has expired', 'data' => []];

        return $query;
    }

    public function checkIdInRecord($filters)
    {
        if ($filters['discount_id'] !== $filters['record_code']['id']) return false;
        return true;
    }

    public function checkUsedCode($filters)
    {
        $query  = Discount::select("*")->where('id', $filters['discount_id'])->get();

        if (count($query) === 0) return 'This code is not exist';
        if ($query[0]->is_used) return 'This code is already in use before';
        if (strtotime("now") > strtotime($query[0]->expired_at)) return 'This code has expired';

        return null;
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
