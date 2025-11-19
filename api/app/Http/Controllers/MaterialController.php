<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Http\Resources\MaterialResource;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index()
    {
        return MaterialResource::collection(
            Material::with('category')->get()
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50',
            'description' => 'required',
            'minimum_stock' => 'required|numeric',
            'category_id' => 'required|exists:categories,id'
        ]);

        $material = Material::create($request->all());

        return new MaterialResource($material);
    }

    public function update(Request $request, $id)
    {
        $material = Material::findOrFail($id);

        $material->update($request->all());

        return new MaterialResource($material);
    }

    public function destroy($id)
    {
        $material = Material::findOrFail($id);
        $material->delete();

        return response()->json(['message' => 'deleted']);
    }
}
