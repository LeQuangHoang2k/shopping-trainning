<?php

namespace App\Http\Controllers\Discount;

use App\Http\Controllers\Controller;
use App\Http\Requests\Discount\GetRequest;
use App\Http\Resources\DiscountResource;
use App\Repositories\DiscountRepository;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public $discountRepository;

    public function __construct(DiscountRepository $discountRepository)
    {
        $this->discountRepository = $discountRepository;
    }

    public function index(GetRequest $request)
    {
        $request->validated();
        $filters = $request->all();

        return new DiscountResource($this->discountRepository->get($filters));
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
        //
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
