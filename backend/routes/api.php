<?php

use App\Http\Controllers\SavingsController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'savings' => SavingsController::class,
    'transactions' => TransactionController::class,
]);
