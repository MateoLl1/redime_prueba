<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MaterialController;

Route::apiResource('categories', CategoryController::class);
Route::apiResource('materials', MaterialController::class);
