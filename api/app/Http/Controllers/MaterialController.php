<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Http\Resources\MaterialResource;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    /**
     * Listar materiales paginados (incluyendo categoría)
     */
    public function index()
    {
        return MaterialResource::collection(
            Material::with('category')
                ->orderBy('id', 'desc')
                ->paginate(10)
        );
    }

    /**
     * Crear material
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50',
            'description' => 'required',
            'minimum_stock' => 'required|numeric',
            'category_id' => 'required|exists:categories,id'
        ]);

        $material = Material::create([
            'name' => $request->name,
            'description' => $request->description,
            'minimum_stock' => $request->minimum_stock,
            'category_id' => $request->category_id,
            'status' => 'ACTIVE'
        ]);

        return new MaterialResource($material->load('category'));
    }

    /**
     * Actualizar material
     */
    public function update(Request $request, $id)
    {
        $material = Material::findOrFail($id);

        $request->validate([
            'name' => 'required|max:50',
            'description' => 'required',
            'minimum_stock' => 'required|numeric',
            'category_id' => 'required|exists:categories,id'
        ]);

        $material->update($request->all());

        return new MaterialResource($material->load('category'));
    }

    /**
     * Eliminar material
     */
    public function destroy($id)
    {
        $material = Material::findOrFail($id);
        $material->delete();

        return response()->json(['message' => 'deleted']);
    }
}
