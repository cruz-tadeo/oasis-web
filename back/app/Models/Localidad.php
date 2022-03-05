<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Localidad extends Model
{
    use HasFactory;

    protected $table = "locaciones";

    public function propiedad()
    {
        return $this->belongsTo("App\Hotel");
    }
}
