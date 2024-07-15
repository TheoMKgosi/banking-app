<?php

namespace App\Http\Controllers;

use App\Models\Saving;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,Saving $saving)
    {
        $request->validate([
            'amount'=> 'required|numeric',
            'type' => 'required|in:deposit,withdraw'
        ]);
        Log::info($request);
        Log::info($saving);

        $transaction = Transaction::create([
            'saving_id' => $request->input('saving_id'),
            'amount' => $request->input('amount'),
            'description' => $request->input('description'),
            'type' => $request->input('type'),

        ]);

        if($transaction->type === 'deposit'){
            $saving->balance += $transaction->amount;
        }elseif($transaction->type === 'withdraw'){
            if($saving->balance < $transaction->amount){
                return response()->json(['message' => 'Insufficient funds'],400);
            }
            $saving->balance -= $transaction->amount;
        }
        $saving->save();

        return response()->json($transaction,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
