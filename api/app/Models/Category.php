<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    protected $fillable = [
        'name',
        'status'
    ];

    public $timestamps = true;

    public function materials()
    {
        return $this->hasMany(Material::class, 'category_id');
    }
}
