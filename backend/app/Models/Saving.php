<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
