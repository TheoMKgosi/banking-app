<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'amount_borrowed',
        'interest'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payment(){
        return $this->hasMany(Payment::class);
    }
}
