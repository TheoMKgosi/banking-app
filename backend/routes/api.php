<?php

use App\Http\Controllers\AdminSavingController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\SavingsController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function (){
    Route::post('/savings/{saving}/transaction',[TransactionController::class,'store']);
    Route::get('/loans',[LoanController::class, 'index']);
});

Route::middleware(['auth:sanctum','admin'])->group(function (){
    Route::get('/admin/savings',[AdminSavingController::class, 'index']);
});

Route::apiResources([
    'savings' => SavingsController::class,
]);
