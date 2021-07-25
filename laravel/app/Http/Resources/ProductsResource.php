<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($data)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "slug" => $this->slug,
            "decription" => $this->decription,
            "price" => $this->price,
            "picture" => $this->picture,
            "priority" => $this->priority,
            "options" => ProductOptionsResource::collection($this->options),
            "images" => ProductImagesResource::collection($this->images),
            // "images" => "id",
            'created_at' => Carbon::parse($this->created_at)->format('d/m/Y H:i:s'),
        ];
    }
}
