<?php

namespace App\Http\Controllers;

use App\Models\Saving;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SavingsController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return response()->json(Saving::where('user_id',Auth::id())->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $savings = Saving::create([
            'account_number' => $this->generateUniqueAccount(),
            'user_id' => Auth::id()
        ]);

        return response()->json($savings,201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Saving $saving)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Saving $saving)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Saving $saving)
    {
        //
    }

    /**
     * Generate a unique account number
     */
    private function generateUniqueAccount()
    {
        do {
            $accountNumber = str_pad(mt_rand(1, 99999999), 8, '0', STR_PAD_LEFT); // 8-digit number
        } while (Saving::where('account_number', $accountNumber)->exists());

        return $accountNumber;
    }
}
