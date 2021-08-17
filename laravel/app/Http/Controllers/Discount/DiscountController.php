<?php

namespace App\Http\Controllers\Discount;

use App\Http\Controllers\Controller;
use App\Http\Resources\DiscountResource;
use App\Repositories\DiscountRepository as RepositoriesDiscountRepository;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public $discountRepository;

    public function __construct(RepositoriesDiscountRepository $discountRepository)
    {
        $this->discountRepository = $discountRepository;
    }

    public function index()
    {
        return new DiscountResource($this->discountRepository->test());
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
