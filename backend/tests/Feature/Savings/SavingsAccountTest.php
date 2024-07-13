<?php

use App\Models\Savings;
use Database\Seeders\DatabaseSeeder;

test('user can create savings account', function (){
    $this->seed(DatabaseSeeder::class);

    $response = $this->post('/saving',[
        'user_id' => 1
    ]);

    $response->assertNoContent();
});
