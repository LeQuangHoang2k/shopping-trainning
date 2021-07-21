<?php

namespace App\Repositories;

use App\Models\Products;

class ProductsRepository
{
    public function getAll($filters)
    {
        $query = Products::select('*');
        $sort = isset($filters['sort']) ? $filters['sort'] : 'priority';
        $order = isset($filters['order']) ? $filters['order'] : 'desc';

        //find 1
        if (isset($filters['id'])) {
            return $query->where('id', $filters['id']);
        }

        //find name
        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        //find color
        if (isset($filters['color'])) {
            $query->where('color', 'like', '%' . $filters['color'] . '%');
        }

        // dd($filters);

        return $query->orderBy($sort, $order)->paginate(15);
    }
}
