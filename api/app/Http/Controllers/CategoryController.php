<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Listar categorías paginadas
     */
    public function index()
    {
        return CategoryResource::collection(
            Category::orderBy('id', 'desc')->paginate(10)
        );
    }

    /**
     * Crear categoría
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30'
        ]);

        $category = Category::create([
            'name' => $request->name,
            'status' => 'ACTIVE'
        ]);

        return new CategoryResource($category);
    }

    /**
     * Actualizar categoría
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30'
        ]);

        $category = Category::findOrFail($id);
        $category->update([
            'name' => $request->name,
            'status' => $request->status ?? $category->status
        ]);

        return new CategoryResource($category);
    }

    /**
     * Eliminar categoría
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(['message' => 'deleted']);
    }
}
