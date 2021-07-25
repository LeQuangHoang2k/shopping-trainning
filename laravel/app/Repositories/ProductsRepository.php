<?php

namespace App\Repositories;

use App\Models\Products;
use Illuminate\Support\Facades\Validator;

class ProductsRepository
{
    public function getAll($filters)
    {
        $query = Products::select('*');
        $sort = isset($filters['sort']) ? $filters['sort'] : 'priority';
        $order = isset($filters['order']) ? $filters['order'] : 'desc';

        if ($filters == []) return [];

        //find 1
        if (isset($filters['id'])) {
            return $query->where('id', $filters['id'])->get();
        }

        if (isset($filters['page']) || is_null($filters['page'])) {
            $validator = Validator::make($filters, [
                'page' => 'required|nullable|integer|min:1'
            ]);

            if ($validator->fails()) return [];
        }

        //find name
        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        //find color
        if (isset($filters['color'])) {
            $query->where('color', 'like', '%' . $filters['color'] . '%');
        }

        return $query->orderBy($sort, $order)->paginate(15);
    }
}

// limit     la : count
// offset    la : skip
// $limit = 15;
// $page = isset($filters['page']) ? $filters['page'] : 1; //(0,15]
// $offset = ($page - 1) * $limit; // 0