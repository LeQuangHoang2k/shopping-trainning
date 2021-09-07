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
use Tymon\JWTAuth\Contracts\Providers\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Token;

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
    public function index(Request $request)
    {
        return [
            "message" => "success",
            "order" => OrderResource::collection($this->orderRepository->getAll()),
            "request" => $request->user_id,
            "header" => $sub_string = $request->header('Authorization'),
            "sub_header" => $sub_header = explode(" ", $sub_string)[1],
            "first_path" => $first_path = explode(".", $sub_header)[1],
            "base64_parse" => $base64_parse = base64_decode($first_path),
            "json_parse" => $json_parse = json_decode($base64_parse, true),
            "sub" => $jti = $json_parse['sub'],
            // "user" => $user = Auth::user()
        ];
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

        // dd(JWTAuth::parseToken()->authenticate());

        $updateUsedCode = null;

        if ($haveRecord = $this->discountRepository->haveRecord($filters)) {
            if ($checkIdInRecord = !$this->discountRepository->checkIdInRecord($filters)) {
                return [
                    "error" => "Your code not in record"
                ];
            }

            if ($checkUsedCode = $this->discountRepository->checkUsedCode($filters)) {
                return [
                    "error" => $checkUsedCode
                ];
            }

            $updateUsedCode = $this->discountRepository->updateUsedCode($filters);
        } else {
            if ($checkEmptyRecord = !$this->discountRepository->checkEmptyRecord($filters)) {
                return [
                    "error" => "Your code null and record not empty",
                ];
            }
        }

        return [
            "message" => "success",
            "order" => $order = new OrderResource($this->orderRepository->create($filters)),
            "order_detail" => OrderDetailResource::collection($this->orderDetailRepository->create($filters, $order)),
            "code_used" => $updateUsedCode,
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

// dd(JWTAuth::parseToken()->authenticate($request["token"]));
// dd(JWTAuth::parseToken()->authenticate());
