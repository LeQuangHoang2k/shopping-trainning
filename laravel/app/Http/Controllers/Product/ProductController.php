<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\product\GetRequest;
use App\Http\Resources\ProductResource;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index(GetRequest $request)
    {
        $request->validated();
        $filters = request()->all();
        return ProductResource::collection($this->productRepository->getAll($filters));
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        if (!is_numeric($id) || $id < 1) {
            return response()->json(['error' => [
                'message' => 'Not found!'
            ]], 404);
        }

        $product = $this->productRepository->find($id);

        if (!$product) {
            return response()->json(['error' => [
                'message' => 'Not found!'
            ]], 404);
        }

        return new ProductResource($this->productRepository->find($id));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
