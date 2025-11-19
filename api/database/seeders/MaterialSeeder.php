<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Material;
use App\Models\Category;

class MaterialSeeder extends Seeder
{
    public function run()
    {
        $materials = [
            [
                'name' => 'Caramelos',
                'description' => 'Funda de caramelos surtidos.',
                'minimum_stock' => 100,
                'category' => 'Golosinas'
            ],
            [
                'name' => 'Cloro',
                'description' => 'Botella de cloro 1L.',
                'minimum_stock' => 20,
                'category' => 'Limpieza'
            ],
            [
                'name' => 'Galletas',
                'description' => 'Paquete de galletas dulces.',
                'minimum_stock' => 50,
                'category' => 'Snacks'
            ],
        ];

        foreach ($materials as $item) {

            $category = Category::where('name', $item['category'])->first();

            Material::create([
                'name' => $item['name'],
                'description' => $item['description'],
                'minimum_stock' => $item['minimum_stock'],
                'category_id' => $category->id,
                'status' => 'ACTIVE'
            ]);
        }
    }
}
