<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return response()->json(Loan::where('user_id',Auth::id())->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $loan = Loan::create([
            'account_number' => $this->generateUniqueAccount(),
            'user_id' => Auth::id(),
            'amount_borrowed' => $request->input('amount_borrowed'),
            'interest' => $request->input('interest'),
            //HACK: ugly propably do a function
            'total' => $request->input('amount_borrowed') + ($request->input('amount_borrowed') * ($request->input('interest')/100))
        ]);

        return response()->json($loan,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Loan $loan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Loan $loan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Loan $loan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Loan $loan)
    {
        //
    }

    private function generateUniqueAccount()
    {
        do {
            $accountNumber = 'LO'. str_pad(mt_rand(1, 99999999), 6, '0', STR_PAD_LEFT); //TWO characters LO and  6-digit number
        } while (Loan::where('account_number', $accountNumber)->exists());

        return $accountNumber;
    }
}
