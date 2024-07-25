<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->string('account_number')->unique();
            $table->foreignId('user_id')->constrained();
            $table->decimal('amount_borrowed');
            $table->decimal('total');
            $table->decimal('interest');
            $table->timestamp('date_payed')->nullable();
            $table->timestamps();

        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('account_number')->unique();
            $table->foreignId('loan_id')->constrained();
            $table->decimal('amount');
            $table->decimal('remaing_balance');
            $table->string('ref_no')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
        Schema::dropIfExists('payments');
    }
};
