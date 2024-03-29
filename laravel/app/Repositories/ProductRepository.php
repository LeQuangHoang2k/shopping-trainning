<?php

namespace App\Repositories;

use App\Models\Product\Product;

class ProductRepository
{
    public function getAll($filters)
    {
        $query = Product::select('*');
        $sort = isset($filters['sort']) ? $filters['sort'] : 'priority';
        $order = isset($filters['order']) ? $filters['order'] : 'desc';

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

    public function find($id)
    {
        // dd($id);
        // return Product::select('*')->where('id', $id)->get();
        return Product::find($id);
    }
}

// limit     la : count
// offset    la : skip
// $limit = 15;
// $page = isset($filters['page']) ? $filters['page'] : 1; //(0,15]
// $offset = ($page - 1) * $limit; // 0