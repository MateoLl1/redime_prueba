<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MaterialResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'description' => $this->description,
            'minimum_stock' => $this->minimum_stock,
            'status' => $this->status,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'category_id' => $this->category_id,
            'created_at' => $this->created_at
        ];
    }
}
