<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Jwaneng saccos' => app()->version()];
});

require __DIR__.'/auth.php';
