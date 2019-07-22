<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'seller_name',
        'contact_name',
        'company',
        'phone',
        'email',        
    ];
}
