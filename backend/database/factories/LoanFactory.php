<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $amount = rand(500, 500000);
        $interest = (5/100);
        return [
            'account_number' => 'LO' . str_pad(mt_rand(1,999999),'0',STR_PAD_LEFT),
            'user_id' => 1,
            'amount_borrowed' => $amount,
            'total' =>  $amount + ($amount * $interest),
            'interest' => $interest

        ];
    }
}
