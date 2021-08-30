<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "facebook_id" => $this->facebook_id,
            "google_id" => $this->google_id,
            "email" => $this->email,
            "name" => $this->name,
            "phone" => $this->phone,
            "picture" => $this->picture,
            "address" => $this->address,
            "role" => $this->role,
        ];
    }
}
