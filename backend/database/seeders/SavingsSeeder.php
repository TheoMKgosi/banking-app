<?php

namespace Database\Seeders;

use App\Models\Savings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SavingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Savings::factory()->create([
            'user_id' => 1
        ]);
    }
}
