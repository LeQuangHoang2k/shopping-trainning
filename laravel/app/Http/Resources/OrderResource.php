<?php

namespace App\Http\Resources;

// use Carbon\Carbon;

use App\Models\Order\OrderDetail;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "user_id" => $this->user_id,
            "address" => $this->address,
            "phone" => $this->phone,
            "discount_id" => $this->discount_id,
            "tax" => $this->tax,
            "total_price" => $this->total_price,
            'created_at' => Carbon::parse($this->created_at)->format('d/m/Y'),
            'orderDetails' => OrderDetailResource::collection($this->orderDetails)
        ];
    }
}
