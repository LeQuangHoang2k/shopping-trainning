<?php

namespace App\Repositories;

use App\Models\Products;

class ProductsRepository
{
    public function getAll($filters)
    {
        $query = Products::select("*");
        $order = isset($filters["order"]) ? $filters["order"] : "priority";
        $sort = isset($filters["sort"]) ? $filters["sort"] : "desc";

        //find 1
        if (isset($filters["id"])) {
            return $query->where("id", $filters["id"]);
        }

        //find name
        if (isset($filters["name"])) {
            $query->where("name", `%` . $filters["name"] . `%`);
        }

        return $query->orderBy($order, $sort)->paginate(15);
    }

    public function find($id)
    {
    }
}
