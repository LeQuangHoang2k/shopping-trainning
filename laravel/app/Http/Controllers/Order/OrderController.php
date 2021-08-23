<?php

namespace App\Http\Controllers\Order;

use Illuminate\Http\Request;
use App\Http\Requests\Order\CreateRequest;

use App\Http\Controllers\Controller;

use App\Http\Resources\OrderDetailResource;
use App\Http\Resources\OrderResource;
use App\Repositories\DiscountRepository;
use App\Repositories\OrderDetailRepository;
use App\Repositories\OrderRepository;


class OrderController extends Controller
{
    public $orderRepository;
    public $orderDetailRepository;
    public $discountRepository;

    public function __construct(OrderRepository $orderRepository, OrderDetailRepository $orderDetailRepository, DiscountRepository $discountRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderDetailRepository = $orderDetailRepository;
        $this->discountRepository = $discountRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRequest $request)
    {
        $request->validated();
        $filters = request()->all();

        // $code_used = $this->discountRepository->updateUsedCode($filters);

        if (!$checkIdInRecord = $this->discountRepository->checkIdInRecord($filters)) {
            return [
                "error" => "Your code has not been verified"
            ];
        }

        if ($checkUsedCode = $this->discountRepository->checkUsedCode($filters)) {
            return [
                "error" => $checkUsedCode
            ];
        }

        return [
            "message" => "success",
            "order" => $order = new OrderResource($this->orderRepository->create($filters)),
            "order_detail" => OrderDetailResource::collection($this->orderDetailRepository->create($filters, $order)),
            // "code_used" => $code_used
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
