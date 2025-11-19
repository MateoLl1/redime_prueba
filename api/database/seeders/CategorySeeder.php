<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            'Golosinas',
            'Limpieza',
            'Bebidas',
            'Snacks',
            'Abarrotes'
        ];

        foreach ($categories as $name) {
            Category::create([
                'name' => $name,
                'status' => 'ACTIVE'
            ]);
        }
    }
}
