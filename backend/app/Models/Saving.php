<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPUnit\Framework\returnValue;

/**
 *
 *
 * @property int $id
 * @property int $user_id
 * @property string $balance
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\SavingFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Saving newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Saving newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Saving query()
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereUserId($value)
 * @property string $account_number
 * @method static \Illuminate\Database\Eloquent\Builder|Saving whereAccountNumber($value)
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Transaction> $transaction
 * @property-read int|null $transaction_count
 * @mixin \Eloquent
 */
class Saving extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'user_id',
        'account_number'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function transaction(){
        return $this->hasMany(Transaction::class);
    }
}
