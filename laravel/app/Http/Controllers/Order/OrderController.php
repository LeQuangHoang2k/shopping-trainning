<?php

namespace App\Http\Controllers\Order;

use Illuminate\Http\Request;
use App\Http\Requests\Order\CreateRequest;

use App\Http\Controllers\Controller;

use App\Http\Resources\OrderDetailResource;
use App\Http\Resources\OrderResource;
use App\Repositories\OrderDetailRepository;
use App\Repositories\OrderRepository;


class OrderController extends Controller
{
    public $orderRepository;
    public $orderDetailRepository;

    public function __construct(OrderRepository $orderRepository, OrderDetailRepository $orderDetailRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderDetailRepository = $orderDetailRepository;
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

        return [
            "message" => "success",
            "order" => $order = new OrderResource($this->orderRepository->create($filters)),
            "order_detail" => OrderDetailResource::collection($this->orderDetailRepository->create($filters, $order)),
            "record_code" => $filters['record_code'],
        ];
        //

        // $orderDetails = [];
        // foreach ($filters['orderList'] as $item) {
        //     $orderDetail = OrderDetail::create([
        //         "order_id" => $order->id,
        //         "product_id" => $item['item']['product_id'],
        //         "amount" => $item['item']['count'],
        //         "product_option_id" => $item['item']['option_id'],
        //         "price_per_unit " => $item['item']['price'],
        //     ]);

        //     array_push($orderDetails, $orderDetail);
        // }

        // return [
        //     "message" => "success",
        //     "order" => $order,
        //     "order_detail_list" => $orderDetails
        // ];

        // return OrderResource::collection($this->orderRepository->create($filters));

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
